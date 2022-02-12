import React, { useMemo } from 'react';
import {
  _chest,
  _empty,
  _full,
  _container,
  _center,
  _float,
  _tier,
  _disabled,
  _active,
  _notification,
} from './Chest.styled';
import {
  GAME_INVENTORY,
  TIER_I,
  TIER_II,
  TIER_III,
  TIER_IV,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { IconTreasure } from 'design/icons/treasure.icon';
import { useActions } from '../../../../../actions';

const Chest = ({ tier }) => {
  const { modalChest } = useActions();
  const [chests] = useRemix(
    GAME_INVENTORY,
    (inventory) => inventory?.chests || [],
  );

  const num_chests = useMemo(() => {
    let count = 0;
    if (Array.isArray(chests)) {
      for (const chest of chests) {
        if (chest.tier === tier) count++;
      }
    }
    return count;
  }, [chests]);

  const show_tier = {
    [TIER_I]: 'I',
    [TIER_II]: 'II',
    [TIER_III]: 'III',
    [TIER_IV]: 'IV',
  }[tier];

  const tier_multiply = {
    [TIER_I]: 1,
    [TIER_II]: 2,
    [TIER_III]: 3,
    [TIER_IV]: 4,
  }[tier];

  return (
    <_chest>
      {!num_chests ? (
        <_empty>
          <_center>
            <_disabled>
              <IconTreasure />
              <span>{show_tier}</span>
            </_disabled>
          </_center>
          <_center>
            <_tier />
          </_center>
        </_empty>
      ) : null}
      {num_chests ? (
        <_full $tier={tier_multiply} onClick={() => modalChest()}>
          <_float>
            <_notification>{num_chests}</_notification>
          </_float>
          <_container>
            <_center>
              <_active>
                <IconTreasure />
                <span>{show_tier}</span>
              </_active>
            </_center>
            <_center></_center>
          </_container>
        </_full>
      ) : null}
    </_chest>
  );
};

export default Chest;
