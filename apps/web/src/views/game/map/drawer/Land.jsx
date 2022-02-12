import React, { useMemo, useCallback } from 'react';
import { _land, _background } from './Land.styled';
import { useRemix } from 'core/hooks/remix/useRemix';
import { DRAWER_ACTIVE, GAME_MAP } from 'core/remix/state';
import { find } from 'lodash';

const Land = ({ drawer }) => {
  const col = useMemo(() => drawer?.[0], [drawer]);
  const level = useMemo(() => +drawer?.[1], [drawer]);
  const [tile] = useRemix(
    GAME_MAP,
    (rows) => find(rows, (row) => row?.level === level)?.[col],
  );
  const element = tile?.type;
  const tier = tile?.tier;

  return (
    <_background $element={element} $tier={tier}>
      <_land></_land>
    </_background>
  );
};

export default Land;
