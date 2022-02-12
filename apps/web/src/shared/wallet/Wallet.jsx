import { CHAIN_LOCAL_CLIENT } from 'chain/hooks/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { CACHE_PUB_KEY, DEMO_MODE } from 'core/remix/state';
import { IconWallet } from 'design/icons/wallet.icon';
import React, { useEffect } from 'react';
import { _wallet } from '../../views/game/inventory/Inventory.styled';

const Wallet = () => {
  const [hasCachePubKey] = useRemix(CACHE_PUB_KEY);
  const [demo] = useRemix(DEMO_MODE);
  const [client] = useRemix(CHAIN_LOCAL_CLIENT);
  const publicKey = client?.wallet?.publicKey?.toBase58();
  const short_public = publicKey
    ? `...${publicKey?.substring(publicKey?.length - 6, publicKey?.length)}`
    : null;
  const active = hasCachePubKey !== undefined ? hasCachePubKey : demo?.active;

  return active && short_public ? (
    <_wallet>
      <span>{short_public}</span>
      <IconWallet />
    </_wallet>
  ) : null;
};

export default Wallet;
