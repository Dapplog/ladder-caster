import { useEffect, useState } from 'react';
import { Api } from '../api/Api';

const ConnectedApi = Api();

export const useApi = (type) => {
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);
  let success_id = 0;
  let error_id = 0;

  useEffect(() => {
    const data = ConnectedApi.listen(type);
    const current_state = data.getValue();
    success_id = current_state.success_id;
    error_id = current_state.error_id;

    data.subscribe((next_state) => {
      if (next_state.success_id === success_id + 1) {
        success_id++;
        setWaiting(false);
        setValue(next_state.success);
        setError('');
      } else if (next_state.error_id === error_id + 1) {
        error_id++;
        setWaiting(false);
        setError(next_state.error);
      }
    });
  }, []);

  return {
    value,
    waiting,
    error,
    post: (payload) => {
      setWaiting(true);
      ConnectedApi.request({ ...payload, type });
    },
  };
};
