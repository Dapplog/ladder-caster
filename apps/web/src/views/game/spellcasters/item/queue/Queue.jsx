import React, { useMemo } from 'react';
import {
  _queue,
  _action,
  _icon,
  _float,
  _lock,
  _title,
  _actions,
  _button,
} from './Queue.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../../actions';
import {
  ACTION_CRAFT,
  ACTION_MOVE,
  ACTION_SPELL,
  ACTION_VIEW,
  DEMO_MODE,
  DRAWER_ACTIVE,
  GAME_MAP,
  GAME_SPELLCASTERS,
  TYPE_CRAFT,
  TYPE_EARTH,
  TYPE_FIRE,
  TYPE_GOLD,
  TYPE_WATER,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { find } from 'lodash';
import { AnimateButton } from '../../../../../shared/button/animations/AnimateButton';
import { IconBook } from 'design/icons/book.icon';
import { IconMove } from 'design/icons/move.icon';
import { IconAnvil } from 'design/icons/anvil.icon';
import { IconTreasure } from 'design/icons/treasure.icon';
import { IconFiree } from 'design/icons/firee.icon';
import { IconWater } from 'design/icons/water.icon';
import { IconEarth } from 'design/icons/earth.icon';
import { IconHat } from 'design/icons/hat.icon';
import { IconLock } from 'design/icons/lock.icon';
import { AnimatePresence } from 'framer-motion';
import { AnimateLock } from '../animations/AnimateLock';

const Queue = ({ spell_id }) => {
  const { modalMove, modalSpell, modalLoot } = useActions();
  const [spellcasters] = useRemix(GAME_SPELLCASTERS);
  const [drawer, setDrawer] = useRemix(DRAWER_ACTIVE);
  const [action, setAction] = useRemix(ACTION_VIEW);
  const { t } = useTranslation();
  const caster = useMemo(
    () => find(spellcasters, (caster) => caster?.id === spell_id && caster),
    [spellcasters?.length],
  );
  const [num_ticks] = useRemix(DEMO_MODE, (demo) => demo.num_ticks);
  const position = caster?.position;
  const [tile] = useRemix(
    GAME_MAP,
    (rows) =>
      find(rows, (row) => row?.level === +position?.[1])?.[position?.[0]],
  );

  const locked_loot = caster?.last_loot < num_ticks;
  const locked_spell = caster?.last_spell < num_ticks;
  const locked_move = caster?.last_move < num_ticks;

  const remaining = tile?.remaining;
  const element = tile?.type;

  const IconElement = {
    [TYPE_FIRE]: IconFiree,
    [TYPE_WATER]: IconWater,
    [TYPE_EARTH]: IconEarth,
    [TYPE_CRAFT]: IconAnvil,
    [TYPE_GOLD]: IconTreasure,
  }[element];

  return (
    <_queue>
      <_title>
        {t('spellcasters.actions')}
        {position && <b>{` ${position.toUpperCase()}`}</b>}
      </_title>
      <_actions>
        <AnimateButton low element={element}>
          <_action onClick={() => modalLoot(caster)}>
            <_icon $element={element}>
              {!!IconElement ? <IconElement /> : undefined}
              <span>
                {element === TYPE_CRAFT
                  ? t('spellcaster.action.craft')
                  : t('spellcaster.action.loot')}
              </span>
            </_icon>
            <_float>
              <AnimatePresence>
                {!locked_loot && (
                  <AnimateLock key={'animate-lock-loot'}>
                    <_lock $element={element}>
                      <IconLock />
                    </_lock>
                  </AnimateLock>
                )}
              </AnimatePresence>
            </_float>
          </_action>
        </AnimateButton>
        <AnimateButton>
          <_action onClick={() => modalSpell(caster)}>
            <_icon $basic>
              <IconBook />
              <span>{t('spellcaster.action.spell')}</span>
            </_icon>
            <_float>
              <AnimatePresence>
                {!locked_spell && (
                  <AnimateLock key={'animate-lock-spell'}>
                    <_lock $basic>
                      <IconLock />
                    </_lock>
                  </AnimateLock>
                )}
              </AnimatePresence>
            </_float>
          </_action>
        </AnimateButton>
        <AnimateButton>
          <_action onClick={() => modalMove(caster)}>
            <_icon $basic>
              <IconMove />
              <span>{t('spellcaster.action.move')}</span>
            </_icon>
            <_float>
              <AnimatePresence>
                {!locked_move && (
                  <AnimateLock key={'animate-lock-move'}>
                    <_lock $basic>
                      <IconLock />
                    </_lock>
                  </AnimateLock>
                )}
              </AnimatePresence>
            </_float>
          </_action>
        </AnimateButton>
      </_actions>
    </_queue>
  );
};

export default Queue;
