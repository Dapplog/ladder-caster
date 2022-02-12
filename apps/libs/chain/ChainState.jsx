import React from 'react';
import { useRemixOrigin } from 'core/hooks/remix/useRemixOrigin';
import {
  CHAIN_GAME,
  CHAIN_LOCAL_CONNECTION,
  CHAIN_LOCAL_WALLET,
  CHAIN_NEXT_TURN,
  CHAIN_PROGRAM,
} from './hooks/state';

const ChainState = () => {
  const [wallet] = useRemixOrigin(CHAIN_LOCAL_WALLET);
  const [conn] = useRemixOrigin(CHAIN_LOCAL_CONNECTION);
  const [program] = useRemixOrigin(CHAIN_PROGRAM);
  const [game] = useRemixOrigin(CHAIN_GAME);
  const [turn] = useRemixOrigin(CHAIN_NEXT_TURN);

  return null;
};

export default ChainState;
