import React, { useMemo, useState, useEffect } from 'react';
import {
  _player,
  _background,
  _breakpoint,
  _details,
  _title,
  _description,
} from './Player.styled';
import { useTranslation } from 'react-i18next';
import Character from './character/Character';
import Actions from './actions/Actions';
import Tabs from '../../../../shared/tabs/Tabs';
import {
  ACTION_EQUIP,
  ACTION_VIEW,
  DRAWER_ACTIVE,
  GAME_SPELLCASTERS,
  PLAYER_ACTIONS,
  PLAYER_CHARACTER,
  SPELLCASTER_BUY,
  TABS_CHARACTER_ACTIONS,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { find } from 'lodash';
import Rank from './rank/Rank';
import usePrevious from 'core/hooks/usePrevious';
import Equip from './actions/equip/Equip';

const Player = () => {
  const { t } = useTranslation();
  const [spellcasters] = useRemix(GAME_SPELLCASTERS);
  const [drawer, setDrawer] = useRemix(DRAWER_ACTIVE);
  const [action, setAction] = useRemix(ACTION_VIEW);

  const caster = useMemo(
    () => find(spellcasters, (caster) => caster.id === drawer),
    [drawer, spellcasters],
  );

  const tabs_character_actions = {
    [PLAYER_CHARACTER]: {
      name: t('player.character'),
      View: Character,
    },
    [PLAYER_ACTIONS]: {
      name: t('player.actions'),
      View: Actions,
    },
  };

  useEffect(() => {
    if (!drawer && action) setAction('');
  }, [drawer]);

  const ActionView = {
    [ACTION_EQUIP]: Equip,
  }[action?.type];

  return (
    <_background>
      <_player>
        {drawer === SPELLCASTER_BUY && (
          <_details>
            <_title>{t('wizard.title')}</_title>
            <_description>{t('wizard.description')}</_description>
          </_details>
        )}
        {drawer !== SPELLCASTER_BUY && <Rank />}
        <_breakpoint />
        {!action && (
          <Tabs
            tab_id={TABS_CHARACTER_ACTIONS}
            views={tabs_character_actions}
            caster={caster}
            item_type={action?.item_type}
          />
        )}
        {action && ActionView && <ActionView />}
      </_player>
    </_background>
  );
};

export default Player;
