import React, { useMemo } from 'react';
import { _elements, _orb } from './Elements.styled';
import { IconFiree } from 'design/icons/firee.icon';
import { IconEarth } from 'design/icons/earth.icon';
import { IconWater } from 'design/icons/water.icon';
import { nanoid } from 'nanoid';
import { TYPE_EARTH, TYPE_FIRE, TYPE_WATER } from 'core/remix/state';

const Elements = () => {
  const dummy_order = [TYPE_FIRE, TYPE_WATER, TYPE_EARTH];

  const orbs = () =>
    useMemo(
      () =>
        dummy_order.map((orb) => {
          const element = {
            [TYPE_FIRE]: () => <IconFiree />,
            [TYPE_WATER]: () => <IconWater />,
            [TYPE_EARTH]: () => <IconEarth />,
          };
          return (
            <_orb key={nanoid()} $color={orb}>
              {element?.[orb]?.()}
            </_orb>
          );
        }),
      [],
    );

  return <_elements>{orbs()}</_elements>;
};

export default Elements;
