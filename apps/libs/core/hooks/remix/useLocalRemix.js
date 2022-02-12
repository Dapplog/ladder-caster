import remix from 'core/remix';
import { useState, useEffect } from 'react';
import usePrevious from '../usePrevious';
import { useLocalStorage } from '../useLocalStorage';

export const useLocalRemix = (bubble_id, initial_value) => {
  const [local, setLocal] = useLocalStorage(bubble_id, '');
  const [state, setState] = useState({
    value: local,
    setValue: undefined,
  });

  const [subject, setSubject] = useState(null);
  const prev_subject = usePrevious(subject);

  const updateRemix = (next_value, isMount) => {
    const nextState = {
      ...state,
      value: next_value,
      setValue: updateRemix,
    };

    if (!isMount) setLocal(nextState);
    setState(isMount && local ? local : nextState);
    const next_subject = remix.addBubble(
      bubble_id,
      isMount && local ? local : nextState,
    );
    if (next_subject) {
      setSubject(next_subject);
    }
  };

  // subscribe to ref
  useEffect(() => {
    if (!prev_subject && subject) {
      subject.subscribe((next_state) => {
        if (typeof next_state?.value !== 'undefined') {
          setState({
            ...next_state,
            value: next_state.value,
            setValue: next_state.setValue,
          });
        }
      });
      return subject.unsubscribe;
    }
  }, [subject]);

  useEffect(() => {
    updateRemix(initial_value, true);
  }, []);

  return [state.value, updateRemix];
};
