import remix from 'core/remix';
import { useState, useEffect } from 'react';
import usePrevious from '../usePrevious';

export const useLocalBubble = (bubble_id) => {
  const [bubble, setBubble] = useState({
    value: undefined,
    setValue: undefined,
  });

  const updateBubble = (next_value) => {
    if (bubble?.setValue) bubble.setValue(next_value);
  };

  const [subject, setSubject] = useState();
  const prev_subject = usePrevious(subject);

  // Listen for subject mounting/unmounting
  useEffect(() => {
    if (!subject) {
      const remix_bubbles = remix?.bubbles;
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
      return subject.unsubscribe;
    }
  }, [subject]);

  return [bubble.value, updateBubble];
};
