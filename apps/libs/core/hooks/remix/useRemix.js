import remix from 'core/remix';
import { useState, useEffect, useMemo } from 'react';
import usePrevious from '../usePrevious';

export const useRemix = (bubble_id, selector) => {
  const [bubble, setBubble] = useState({
    value: undefined,
    setValue: undefined,
  });

  const updateBubble = (next_value) => {
    if (bubble?.setValue) bubble.setValue(next_value);
    return next_value;
  };

  const [subject, setSubject] = useState();
  const prev_subject = usePrevious(subject);

  // Listen for subject mounting/unmounting
  useEffect(() => {
    const remix_bubbles = remix?.bubbles;
    if (!subject) {
      const current_subject = remix_bubbles?.getValue()?.get(bubble_id);
      if (remix_bubbles && !current_subject) {
        remix_bubbles?.subscribe((next_bubbles) => {
          const next_subject = next_bubbles?.get(bubble_id);
          if (!subject && next_subject) {
            setSubject(next_subject);
          }
        });
      } else {
        setSubject(current_subject);
      }
    }
  }, [subject]);

  // subscribe to ref
  useEffect(() => {
    if (!prev_subject && subject) {
      subject.subscribe((next_state) => {
        setBubble({
          ...next_state,
          value: next_state.value,
          setValue: next_state.setValue,
        });
      });
    }
  }, [subject]);

  const reduce_value = useMemo(() => {
    if (bubble?.value && selector) return selector(bubble?.value);
    else return bubble?.value;
  }, [bubble?.value]);

  return [reduce_value, updateBubble];
};
