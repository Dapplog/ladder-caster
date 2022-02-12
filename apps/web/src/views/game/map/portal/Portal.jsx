import React, { useMemo } from 'react';
import {
  _portal,
  _elements,
  _element,
  _cutout,
  _bar,
  _fill,
  _multiple,
  _pod,
  _enchantments,
  _active,
  _empty,
} from './Portal.styled';
import { withTheme } from 'styled-components';
import { sortBy } from 'lodash';
import { nanoid } from 'nanoid';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  DRAWER_ACTIVE,
  GAME_MOVES,
  GAME_MAP,
  TYPE_EARTH,
  TYPE_WATER,
  TYPE_FIRE,
} from 'core/remix/state';
import Enchant from './enchant/Enchant';
import { AnimateButton } from '../../../../shared/button/animations/AnimateButton';

const Portal = withTheme(({ theme, level, col }) => {
  const [active, setActive] = useRemix(DRAWER_ACTIVE);
  const [map] = useRemix(GAME_MAP);
  const row = level - 1;
  const position = col + level;
  const [land] = useRemix(GAME_MAP, (lands) => lands?.[row]?.[col]);
  const [moves] = useRemix(GAME_MOVES, (portals) => portals?.[position]);
  const location = moves?.location;

  const rate = land?.rate;
  const random_elements = useMemo(
    () => [
      {
        resources: land?.[TYPE_FIRE],
        color: theme.element[TYPE_FIRE],
      },
      {
        resources: land?.[TYPE_WATER],
        color: theme.element[TYPE_WATER],
      },
      {
        resources: land?.[TYPE_EARTH],
        color: theme.element[TYPE_EARTH],
      },
    ],
    [land],
  );

  const sorted_elements = sortBy(random_elements, ({ position }) => -position);

  const pods = (resources, color) => {
    let render_pods = [];
    for (let i = 0; i <= 3; i++) {
      const isFull = i <= resources;
      render_pods.push(
        <_pod key={nanoid()} $empty={!isFull}>
          <_fill $color={isFull ? color : undefined} />
        </_pod>,
      );
    }
    return render_pods;
  };

  const render_elements = sorted_elements.map(({ resources, color }) => (
    <_element key={nanoid()}>
      <_cutout>
        <_multiple>
          {rate}
          <b>x</b>
        </_multiple>
        <_bar>{pods(resources, color)}</_bar>
      </_cutout>
    </_element>
  ));

  const notEmpty = land !== undefined && !land?.empty;

  return (
    <_portal>
      {notEmpty && (
        <AnimateButton low>
          <_active onClick={() => setActive(position)}>
            <_enchantments>
              <Enchant location={location} />
            </_enchantments>
            <_elements>{render_elements}</_elements>
          </_active>
        </AnimateButton>
      )}
      {!notEmpty && <_empty></_empty>}
    </_portal>
  );
});

export default Portal;
