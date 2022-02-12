import { useEffect, useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { useRemixOrigin } from 'core/hooks/remix/useRemixOrigin';
import {
  GAME_MAP,
  DEMO_MODE,
  GAME_OPTIONS,
  GAME_RESOURCES,
  GAME_SPELLCASTERS,
  ENCHANT_MAGIC,
  ENCHANT_MINING,
  ENCHANT_MOVE,
  ENCHANT_SPELL,
  GAME_MOVES,
  ENCHANT_TREASURE,
  TYPE_FIRE,
  TYPE_EARTH,
  TYPE_WATER,
  TYPE_GOLD,
  GAME_INVENTORY,
  MODAL_ACTIVE,
  TABS_CHARACTER_ACTIONS,
  PLAYER_CHARACTER,
  GAME_CONFIRM,
  SUCCESS_ACTIVE,
  TIER_I,
  TIER_II,
  TIER_III,
  TIER_IV,
  EQUIP_ITEM,
  UNEQUIP_ITEM,
} from 'core/remix/state';
import usePrevious from 'core/hooks/usePrevious';
import { randomIntBetween } from 'core';
import { nanoid } from 'nanoid';
import { find } from 'lodash';

const Demo = () => {
  const [time, setTime] = useState(0);

  const [equip, setEquip] = useRemixOrigin(EQUIP_ITEM, '');
  const [unequip] = useRemixOrigin(UNEQUIP_ITEM, '');

  const [casterTab, setCasterTab] = useRemixOrigin(
    TABS_CHARACTER_ACTIONS,
    PLAYER_CHARACTER,
  );

  const [demo, setDemo] = useRemixOrigin(DEMO_MODE, {
    active: false,
    num_ticks: 1,
    positions: [100, 100, 100],
  });

  const [modal, setModal] = useRemixOrigin(MODAL_ACTIVE, {});

  const [confirm, setConfirm] = useRemixOrigin(GAME_CONFIRM, {});

  const [options, setOptions] = useRemixOrigin(GAME_OPTIONS, {
    base: 1200,
    speed: 120,
    reward: 10,
    bars: 3,
    land: 3,
  });

  const [resources, setResources] = useRemixOrigin(GAME_RESOURCES, {
    fire: 0,
    earth: 0,
    water: 0,
    gold: 0,
  });

  const [inventory, setInventory] = useRemixOrigin(GAME_INVENTORY, {
    items: [],
    chests: [],
    last_mint: 0,
  });

  const [spellcasters, setSpellcasters] = useRemixOrigin(GAME_SPELLCASTERS, []);

  const spawn_land = (col, level) => {
    let tier = 1;

    if (level <= 10) tier = TIER_I;
    else if (level >= 11 && level <= 15) tier = TIER_II;
    else if (level >= 16 && level <= 20) tier = TIER_III;
    else if (level >= 21 && level <= 30) tier = TIER_IV;

    return {
      col,
      id: nanoid(),
      tier,
      empty: false,
      level,
      cooldown: 0,
      enchant: ENCHANT_TREASURE,
      remaining: 1,
      history: {},
      players: {},
      actions: {},
      type: 'gold',
    };
  };

  const respawn_land = (col, level) => {
    const random_enchants = [ENCHANT_SPELL, ENCHANT_MAGIC, ENCHANT_MINING];
    const enchant =
      random_enchants[randomIntBetween(0, random_enchants.length - 1)];

    return {
      col,
      id: nanoid(),
      tier: TIER_I,
      empty: false,
      level,
      cooldown: 0,
      enchant,
      remaining: 3 + randomIntBetween(0, 3),
      history: {},
      players: {},
      actions: {},
      type: [TYPE_FIRE, TYPE_WATER, TYPE_EARTH][randomIntBetween(0, 2)],
    };
  };

  const empty_land = (col, level) => {
    return {
      col,
      id: nanoid(),
      level,
      empty: true,
    };
  };

  const init_land = (col, level) => {
    const random_enchants = [ENCHANT_SPELL, ENCHANT_MAGIC, ENCHANT_MINING];
    const enchant =
      random_enchants[randomIntBetween(0, random_enchants.length - 1)];

    return {
      col,
      id: nanoid(),
      tier: TIER_I,
      empty: false,
      remaining: 3 + randomIntBetween(0, 3),
      level,
      cooldown: false,
      enchant,
      history: {},
      players: {},
      actions: {},
      type: [TYPE_FIRE, TYPE_WATER, TYPE_EARTH][randomIntBetween(0, 2)],
    };
  };

  const generateMap = () => {
    const columns = ['a', 'b', 'c'];
    const max_rows = 30;
    const lands = [];

    for (let row = 1; row <= max_rows; row++) {
      let level = {};
      level.id = nanoid();
      level.level = row;
      if (row === 1) {
        // generate first row with full resources, and enchants
        for (let col = 0; col <= columns.length - 1; col++) {
          level[columns[col]] = init_land(columns[col], row);
        }
        lands.push(level);
      } else {
        for (let col = 0; col <= columns.length - 1; col++) {
          level[columns[col]] = empty_land(columns[col], row);
        }
        lands.push(level);
      }
    }
    return lands;
  };

  const initialMap = useMemo(() => generateMap(), []);

  const [map, setMap] = useRemixOrigin(GAME_MAP, initialMap);

  const prev_ticks = usePrevious(demo?.num_ticks);

  const next_positions = (num_ticks, num_bars) => {
    const current_loading = num_ticks % num_bars;
    let positions = [];

    for (let i = num_bars; i >= 0; i--) {
      if (i < current_loading) positions[i] = 100;
      else positions[i] = 0;
    }
    return positions;
  };

  const prev_active = usePrevious(demo?.active);

  const reduce_turns = (tile, level) => {
    const next_remaining = tile.remaining - 1;

    if (next_remaining === 0)
      return {
        ...tile,
        cooldown: true,
        enchant: ENCHANT_MOVE,
        level,
        remaining: 1,
        type: 'craft',
        tier: TIER_I,
      };
    else
      return {
        ...tile,
        remaining: next_remaining,
      };
  };

  const play_turn = (row, col) => {
    if (row[col] && !row[col].empty) {
      if (row[col].cooldown) {
        const tile = row[col];
        const next_remaining = tile.remaining - 1;
        if (next_remaining !== 0) return { ...tile, remaining: next_remaining };
        else return respawn_land(row[col], row.level);
      } else return reduce_turns(row[col], row.level);
    } else return row[col];
  };

  const calculateTick = () => {
    // Set Loading Positions
    // const next_ticks = demo?.num_ticks;
    // setDemo({
    //   ...demo,
    //   positions: next_positions(next_ticks, options?.bars || 5)
    // });

    // Save Map
    const current_tick = demo?.num_ticks;
    const current_map = { ...map };
    let next_map = [...map];

    //
    if (current_map && JSON.stringify(current_map) !== '{}') {
      for (const [key, row] of Object.entries(current_map)) {
        next_map[key] = {
          ...row,
          a: play_turn(row, 'a'),
          b: play_turn(row, 'b'),
          c: play_turn(row, 'c'),
        };
      }
    }

    if (current_tick && current_tick % options?.land === 0) {
      let i = 0;
      let random_create = [];
      const find_empty = () => {
        const row = current_map[i];
        const a = row?.['a'];
        const b = row?.['b'];
        const c = row?.['c'];
        if (a?.empty || b?.empty || c?.empty) {
          if (a?.empty) random_create.push('a');
          if (b?.empty) random_create.push('b');
          if (c?.empty) random_create.push('c');
          const col =
            random_create[randomIntBetween(0, random_create.length - 1)];
          const level = row?.level;
          next_map[i][col] = spawn_land(col, level);
        } else if (i <= next_map.length) {
          i++;
          find_empty();
        }
      };
      find_empty();
    }

    setMap(next_map);
  };

  useEffect(() => {
    if (prev_ticks !== demo?.num_ticks) {
      calculateTick();
    }
  }, [demo?.num_ticks]);

  useEffect(() => {
    if (!prev_active && demo?.active) {
      // Change Positions
      setDemo({ ...demo, positions: next_positions(demo?.num_ticks) });

      // Start the setTimeout for num_ticks and positions
      setInterval(() => {
        setTime(+dayjs());
      }, options?.speed * 1000);
    }
  });

  const [analytics, setAnalytics] = useRemixOrigin(GAME_MOVES, {});

  useEffect(() => {
    if (spellcasters?.length >= 1) {
      let next_analytics = {};
      spellcasters.forEach((caster) => {
        const next_position = next_analytics[caster?.position] || {};
        next_position.location = next_position.location + 1 || 1;
        next_analytics = {
          ...next_analytics,
          [caster?.position]: next_position,
        };
      });
      setAnalytics(next_analytics);
    }
  }, [JSON.stringify(spellcasters)]);

  return null;
};

export default Demo;
