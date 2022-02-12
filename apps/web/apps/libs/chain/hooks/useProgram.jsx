import { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import NodeWallet from '../NodeWallet';
import laddercasterIDL from '../laddercast.json';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  CHAIN_LOCAL_CONNECTION,
  CHAIN_LOCAL_WALLET,
  CHAIN_PROGRAM,
} from './state';

export const useProgram = () => {
  const [conn] = useRemix(CHAIN_LOCAL_CONNECTION);
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const [program, setProgram] = useRemix(CHAIN_PROGRAM);
  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);

  // Get the IDL for the program
  const request = async () => {
    try {
      setWaiting(true);
      const _provider = await new anchor.Provider(
        conn,
        new NodeWallet(wallet),
        {},
      );
      const next_program = new anchor.Program(
        laddercasterIDL,
        '9Li9DpSycv5NRyADmhurBVPB6hPc6QbCUZTuRBxMzQnE',
        _provider,
      );
      setWaiting(false);
      setProgram(next_program);
      setError('');
    } catch (error) {
      setWaiting(false);
      setError(error);
    }
  };

  return {
    program,
    waiting,
    error,
    getProgram: () => {
      setWaiting(true);
      return request();
    },
  };
};
