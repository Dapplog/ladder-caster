import React from 'react';
import {
  _inventory,
  _header,
  _title,
  _chests,
  _subheader,
  _subtitle,
  _tiers,
  _container,
  _loot,
  _divider,
  _wallet,
} from './Inventory.styled';
import { useTranslation } from 'react-i18next';
import { TicksInstance } from '../../../../App';
import Chest from './chest/Chest';
import { IconTreasure } from 'design/icons/treasure.icon';
import Thumbar from '../../../shared/thumbar/Thumbar';
import Craft from './craft/Craft';
import Category from './category/Category';
import {
  DEMO_MODE,
  ITEM_BOOK,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
  TIER_I,
  TIER_II,
  TIER_III,
  TIER_IV,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { CHAIN_LOCAL_WALLET } from 'chain/hooks/state';
import { IconWallet } from 'design/icons/wallet.icon';

const Inventory = () => {
  const { t } = useTranslation();
  const [demo] = useRemix(DEMO_MODE);
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const publicKey = wallet?.publicKey?.toString();
  const short_public = `...${publicKey?.substring(
    publicKey?.length - 6,
    publicKey?.length,
  )}`;

  return (
    <_inventory>
      <_header>
        <_title>
          <span>{t('title.bag')}</span>
          {demo?.active && (
            <_wallet>
              <span>{short_public}</span>
              <IconWallet />
            </_wallet>
          )}
        </_title>
        {TicksInstance}
        <_divider />
      </_header>
      <_container>
        <Category type={ITEM_HAT} />
        <Category type={ITEM_ROBE} />
        <Category type={ITEM_STAFF} />
        <Category type={ITEM_BOOK} />
      </_container>
      <Thumbar>
        <_chests>
          <_subheader>
            <_subtitle>
              <IconTreasure />
              <span>{t('inventory.chests')}</span>
            </_subtitle>
          </_subheader>
          <_loot>
            <_tiers>
              <Chest tier={TIER_I} />
              <Chest tier={TIER_II} />
              <Chest tier={TIER_III} />
              <Chest tier={TIER_IV} />
            </_tiers>
            <Craft />
          </_loot>
        </_chests>
      </Thumbar>
    </_inventory>
  );
};

export default Inventory;
