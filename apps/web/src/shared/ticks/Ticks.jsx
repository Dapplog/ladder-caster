import React, { useMemo, useState, useEffect } from 'react';
import { _ticks, _bar, _fill, _loading } from './Ticks.styled';
import { AnimateLoading } from './animations/AnimateLoading';
import { DEMO_MODE, GAME_OPTIONS } from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { nanoid } from 'nanoid';
import usePrevious from 'core/hooks/usePrevious';

const Ticks = () => {
  const [demo, setDemo] = useRemix(DEMO_MODE);
  const [options] = useRemix(GAME_OPTIONS);
  const [inc, setInc] = useState(0);
  const loading_bars = options?.bars || 0;
  const positions = demo?.positions;
  const prev_ticks = usePrevious(demo?.num_ticks || 0);
  const regen_keys =
    prev_ticks % loading_bars === 2 && demo?.num_ticks % loading_bars === 0;

  useEffect(() => {
    if (regen_keys) setInc(inc + 1);
  }, [regen_keys]);

  const instance_key = useMemo(() => nanoid(), []);

  let fill_keys = useMemo(() => {
    let keys = [];
    for (let k = 0; k < loading_bars; k++) {
      keys[k] = nanoid();
    }
    return keys;
  }, [inc]);

  const render_bars = useMemo(() => {
    let bars = [];
    for (let k = 0; k < loading_bars; k++) {
      bars[k] = (
        <_loading key={nanoid()}>
          <_bar key={nanoid()}>
            <AnimateLoading position={positions?.[k]}>
              <_fill key={nanoid()} />
            </AnimateLoading>
          </_bar>
        </_loading>
      );
    }
    return bars;
  }, [loading_bars, positions, fill_keys]);

  return <_ticks key={instance_key}>{render_bars}</_ticks>;
};

export default Ticks;
