import { useState } from 'react';
import { CHAIN_NEXT_TURN } from './state';
import { useRemix } from 'core/hooks/remix/useRemix';

export const useNextTurn = () => {
  const [turn, setTurn] = useRemix(CHAIN_NEXT_TURN);
  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);

  const request = async () => {
    try {
      setWaiting(true);
      // const next_turn = await new

      setWaiting(false);
    } catch (error) {
      setWaiting(false);
      setError(error);
    }
  };

  return {
    turn,
    waiting,
    error,
    nextTurn: () => {
      setWaiting(true);
      return request();
    },
  };
};
