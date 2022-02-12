import { useState } from 'react';

export const useMap = () => {
  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);

  const request = async () => {
    try {
      setWaiting(true);

      setWaiting(false);
    } catch (error) {
      setWaiting(false);
      setError(error);
    }
  };

  return {
    getMap: () => {
      setWaiting(true);
      return request();
    },
  };
};
