import { useRemix } from 'core/hooks/remix/useRemix';
import {
  DEMO_MODE,
  DRAWER_ACTIVE,
  GAME_CONFIRM,
  GAME_INVENTORY,
  GAME_MAP,
  GAME_POSITIONS,
  GAME_RESOURCES,
  GAME_SPELLCASTERS,
  MODAL_ACTIVE,
  MODAL_CHEST,
  MODAL_MINT,
  MODAL_CRAFT,
  MODAL_LOOT,
  MODAL_MOVE,
  MODAL_SPELL,
  PLAYER_ACTIONS,
  PLAYER_CHARACTER,
  TABS_CHARACTER_ACTIONS,
  MODAL_SUCCESS,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
  ITEM_GEM,
  ITEM_BOOK,
  EQUIP_ITEM,
  UNEQUIP_ITEM,
} from 'core/remix/state';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_SPELLCASTERS, PRIVATE_MAP } from 'core/routes/routes';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { randomIntBetween } from 'core';
import { find } from 'lodash';
import { useLoot } from './useLoot';
import { useChest } from './useChest';

export const useActions = () => {
  const { t } = useTranslation();
  const [, setCasterTab] = useRemix(TABS_CHARACTER_ACTIONS);
  const [modal, setModal] = useRemix(MODAL_ACTIVE);
  const [demo, setDemo] = useRemix(DEMO_MODE);
  const [, setDrawer] = useRemix(DRAWER_ACTIVE);
  const [, setEquip] = useRemix(EQUIP_ITEM);
  const [, setUnequip] = useRemix(UNEQUIP_ITEM);
  const [positions, setPositions] = useRemix(GAME_POSITIONS);
  const [confirm, setConfirm] = useRemix(GAME_CONFIRM);
  const [resources, setResources] = useRemix(GAME_RESOURCES);
  const [spellcasters, setSpellcasters] = useRemix(GAME_SPELLCASTERS);
  const [inventory, setInventory] = useRemix(GAME_INVENTORY);
  const [map] = useRemix(GAME_MAP);
  const navigate = useNavigate();

  const updateCaster = (next_caster) => {
    let next_spellcasters = [...spellcasters];
    for (let i = 0; i < next_spellcasters?.length; i++) {
      const current_caster = next_spellcasters[i];
      if (current_caster?.id === next_caster?.id) {
        next_spellcasters[i] = next_caster;
        break;
      }
    }
    setSpellcasters(next_spellcasters);
  };

  const openChest = (mint) => {
    let next_chests = [...inventory?.chests];
    for (let i = 0; i < next_chests?.length; i++) {
      const current_chest = next_chests[i];
      if (current_chest?.mint === mint) {
        // open chest
        const items = useChest(current_chest);

        // remove chest
        next_chests.splice(i, 1);
        setInventory({
          ...inventory,
          chests: next_chests,
          items: [...inventory.items, ...items],
        });
        break;
      }
    }
  };

  return {
    startDemo() {
      setDemo({ ...demo, active: true });
      setResources({ ...resources, gold: 100 });
    },
    closeDrawer() {
      setDrawer('');
      setEquip('');
      setUnequip('');
    },
    visitCasters() {
      navigate(PRIVATE_SPELLCASTERS);
    },
    visitMap() {
      navigate(PRIVATE_MAP);
    },
    tabActions(spell_id) {
      setCasterTab(PLAYER_ACTIONS);
      setDrawer(spell_id);
    },
    tabCharacter(spell_id) {
      setCasterTab(PLAYER_CHARACTER);
      setDrawer(spell_id);
    },
    modalClear() {
      setModal({});
      setConfirm({});
    },
    modalBuyLADA() {
      setModal({
        active: true,
        type: MODAL_MINT,
        description: t('modal.demo.description'),
        accept: () => {
          setDemo({ ...demo, active: true });
          const position = `${['a', 'b', 'c'][randomIntBetween(0, 2)]}1`;
          const random_wizard = () => {
            return {
              type: 'Wizard',
              level: 1,
              position,
              id: nanoid(),
              xp: randomIntBetween(1, 10000),
              hat: null,
              robe: null,
              staff: null,
              spell: null,
              last_loot: 0,
              last_craft: 0,
              last_move: 0,
              last_spell: 0,
            };
          };
          setSpellcasters([...spellcasters, random_wizard()]);
          const next_positions = {
            ...positions,
            [position]: positions?.[position] + 1 || 1,
          };
          navigator.vibrate(100);
          setPositions(next_positions);
        },
        deny: () => {
          setModal({});
        },
      });
    },
    nextTurn() {
      setDemo({ ...demo, num_ticks: demo?.num_ticks + 1 });
    },
    modalLoot(caster) {
      setModal({
        active: true,
        type: MODAL_LOOT,
        options: { caster },
        success: caster?.last_loot === demo?.num_ticks,
      });
    },
    modalSpell(caster) {
      setModal({
        active: true,
        type: MODAL_SPELL,
        options: { caster },
        success: caster?.last_spell === demo?.num_ticks,
      });
    },
    modalMove(caster) {
      setModal({
        active: true,
        type: MODAL_MOVE,
        options: { caster },
        success: caster?.last_move === demo?.num_ticks,
      });
    },
    modalCraft(caster) {
      setModal({
        active: true,
        type: MODAL_CRAFT,
        options: { caster },
        success: caster?.last_craft === demo?.num_ticks,
      });
    },
    modalChest() {
      setModal({
        active: true,
        type: MODAL_CHEST,
      });
    },
    actionLoot(caster) {
      if (caster?.last_loot < demo?.num_ticks) {
        const position = caster?.position;
        const col = position?.[0];
        const level = position?.[1];
        const tile = find(map, (row) => row?.level === +level)?.[col];
        const last_rewards = { chests: [...inventory?.chests] };
        const rewards = useLoot(
          tile,
          caster,
          last_rewards,
          inventory,
          setInventory,
        );

        // Add chests to resources
        if (rewards?.chests?.length) {
          setInventory({
            ...inventory,
            chests: [...inventory.chests, ...rewards.chests],
          });
        }

        const fire = (resources?.fire || 0) + (rewards?.fire || 0);
        const water = (resources?.water || 0) + (rewards?.water || 0);
        const earth = (resources?.earth || 0) + (rewards?.earth || 0);

        // Add resources
        setResources({ ...resources, fire, water, earth });

        // Save latest success animation data in spellcaster
        const next_caster = { ...caster };

        // Limit to once per turn per action in spellcaster
        next_caster.last_loot = demo.num_ticks;

        updateCaster(next_caster);
        setModal({
          ...modal,
          success: true,
          rewards,
        });
      }
    },
    actionMove(action) {
      setConfirm(action);
    },
    confirmMove(caster) {
      if (caster.last_move !== demo.num_ticks) {
        const next_caster = { ...caster };
        next_caster.position = confirm.position;
        next_caster.last_move = demo.num_ticks;
        updateCaster(next_caster);
      }
      setModal({
        ...modal,
        success: true,
      });
      navigator.vibrate(100);
      setConfirm({});
    },
    cancelMove() {
      setConfirm({});
    },
    confirmChest(mint) {
      openChest(mint);
      setModal({
        ...modal,
        success: true,
      });
      navigator.vibrate(100);
      setConfirm({});
    },
    actionCraft() {},
    actionSpell() {},
    chooseEquip(item) {
      setEquip(item);
    },
    chooseUnequip(item, caster) {
      setDrawer(item);
      setUnequip({
        caster,
        item,
      });
    },
    equipItem(item, caster) {
      const item_type = {
        [ITEM_HAT]: 'hat',
        [ITEM_ROBE]: 'robe',
        [ITEM_STAFF]: 'staff',
        [ITEM_GEM]: 'gem',
        [ITEM_BOOK]: 'spell',
      }[item?.type];

      const next_caster = { ...caster, [item_type]: item };
      updateCaster(next_caster);
      setDrawer('');
    },
    unequipItem(item, caster) {
      const item_type = {
        [ITEM_HAT]: 'hat',
        [ITEM_ROBE]: 'robe',
        [ITEM_STAFF]: 'staff',
        [ITEM_GEM]: 'gem',
        [ITEM_BOOK]: 'spell',
      }[item?.type];

      const next_caster = { ...caster, [item_type]: null };
      updateCaster(next_caster);
      setDrawer('');
      setEquip('');
      setUnequip('');
    },
  };
};
