import { useLayoutEffect, useState } from 'react';
import { isEqual } from 'lodash';
import usePrevious from './usePrevious';
import { useViewport } from './useViewport';
import { useEventListener } from './useEventListener';

export const useSize = (ref) => {
  const { width, height } = useViewport();
  const [size, setSize] = useState({});
  const prev_ref = usePrevious(ref);

  useLayoutEffect(() => {
    if (ref.current) setSize(ref.current.getBoundingClientRect());
  }, [isEqual(prev_ref, ref), width, height]);

  useEventListener('resize', () => {
    if (ref.current) setSize(ref.current.getBoundingClientRect());
  });

  useEventListener(
    'resize',
    () => {
      if (ref.current) setSize(ref.current.getBoundingClientRect());
    },
    ref?.current,
  );

  return size;
};
