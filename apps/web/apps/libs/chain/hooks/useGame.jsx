import { useState } from 'react';
import { findProgramAddressSync } from '@project-serum/anchor/.rollup.cache/home/armaniferrante/Documents/code/src/github.com/project-serum/anchor/ts/types/src/utils/pubkey';
import { CHAIN_GAME, CHAIN_NEXT_TURN, CHAIN_PROGRAM } from './state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { Buffer } from 'buffer';

const season = 'helloworld';

export const useGame = () => {
  const [game, setGame] = useRemix(CHAIN_GAME);
  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);

  const request = async (program) => {
    try {
      setWaiting(true);

      if (program) {
        const next_game = await findProgramAddressSync(
          [Buffer.from(season)],
          program.programId,
        );
        setGame(next_game);
      }
      setWaiting(false);
    } catch (e) {
      setWaiting(false);
      setError(e);
    }
  };

  return {
    game,
    waiting,
    error,
    getGame: (program) => {
      setWaiting(true);
      return request(program);
    },
  };
};
