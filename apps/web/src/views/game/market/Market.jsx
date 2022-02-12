import React from 'react';
import { _market, _header, _title, _divider } from './Market.styled';
import { useTranslation } from 'react-i18next';
import { TicksInstance } from '../../../../App';
import { _controls, _speed } from '../header/Header.styled';
import { DEMO_MODE } from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { _wallet } from '../inventory/Inventory.styled';
import { IconWallet } from 'design/icons/wallet.icon';
import { CHAIN_LOCAL_WALLET } from 'chain/hooks/state';

const Market = () => {
  const { t } = useTranslation();
  const [demo] = useRemix(DEMO_MODE);
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const publicKey = wallet?.publicKey?.toString();
  const short_public = `...${publicKey?.substring(
    publicKey?.length - 6,
    publicKey?.length,
  )}`;

  return (
    <_market>
      <_header>
        <_title>
          <span>{t('title.market')}</span>
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
    </_market>
  );
};

export default Market;
