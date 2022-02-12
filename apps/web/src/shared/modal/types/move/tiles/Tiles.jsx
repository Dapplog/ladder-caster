import React, { useMemo } from 'react';
import { _tiles } from './Tiles.styled';
import Tile from '../../../../../views/game/map/tile/Tile';
import {
  GAME_MAP,
  TILE_CHIP,
  TILE_DISABLED,
  TILE_GLOWING,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { find } from 'lodash';

const Tiles = ({ level, position }) => {
  const [map] = useRemix(GAME_MAP);

  const levels = find(map, (row) => row.level === level);

  const status = (col) => {
    const tile_position = `${col}${level}`;
    const caster_col = position?.[0];
    const caster_level = +position?.[1];
    if (position === tile_position) return TILE_CHIP;
    if (caster_level === level) {
      if (col === 'b' || caster_col === 'b') return TILE_GLOWING;
      if (col === 'a' && caster_col === 'c') return TILE_DISABLED;
      if (col === 'c' && caster_col === 'a') return TILE_DISABLED;
    } else if (Math.abs(caster_level - level) === 1) {
      if (col === caster_col) return TILE_GLOWING;
      else return TILE_DISABLED;
    } else return TILE_DISABLED;
  };

  return (
    <_tiles>
      <Tile isModal status={status('a')} level={level} col={'a'} />
      <Tile isModal status={status('b')} level={level} col={'b'} />
      <Tile isModal status={status('c')} level={level} col={'c'} />
    </_tiles>
  );
};

export default Tiles;
