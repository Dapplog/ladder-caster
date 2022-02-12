import React from 'react';
import { _spellcasters, _header, _title, _list } from './Spellcasters.styled';
import Item from './item/Item';
import { useTranslation } from 'react-i18next';
import { TicksInstance } from 'web/App';
import {
  DEMO_MODE,
  GAME_SPELLCASTERS,
  SPELLCASTER_BUY,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { nanoid } from 'nanoid';
import { _button, _controls, _speed } from '../header/Header.styled';
import { AnimateButton } from 'web/src/shared/button/animations/AnimateButton';
import { IconSkip } from 'design/icons/skip.icon';
import { useNextTurn } from 'chain/hooks/useNextTurn';
import { CHAIN_LOCAL_WALLET } from 'chain/hooks/state';
import { _wallet } from '../inventory/Inventory.styled';
import { IconWallet } from 'design/icons/wallet.icon';

const Spellcasters = () => {
  const { t } = useTranslation();
  const { nextTurn } = useNextTurn();
  const [spellcasters] = useRemix(GAME_SPELLCASTERS);
  const [demo] = useRemix(DEMO_MODE);
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const publicKey = wallet?.publicKey?.toString();
  const short_public = `...${publicKey?.substring(
    publicKey?.length - 6,
    publicKey?.length,
  )}`;

  const render_spellcasters = () => {
    if (spellcasters && spellcasters.length >= 1) {
      return spellcasters.map((caster) => (
        <Item key={nanoid()} spell_id={caster.id} />
      ));
    }
  };

  return (
    <_spellcasters>
      <_header>
        <_title>
          <span>{t('title.casters')}</span>
          {demo?.active && (
            <_wallet>
              <span>{short_public}</span>
              <IconWallet />
            </_wallet>
          )}
        </_title>
        {TicksInstance}
      </_header>
      <_list>
        {render_spellcasters()}
        <Item key={SPELLCASTER_BUY} spell_id={SPELLCASTER_BUY} />
      </_list>
    </_spellcasters>
  );
};

export default Spellcasters;
