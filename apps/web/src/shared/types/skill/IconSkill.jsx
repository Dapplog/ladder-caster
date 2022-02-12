import React from 'react';
import {
  ATTRIBUTE_CRIT,
  ATTRIBUTE_EARTH,
  ATTRIBUTE_FIRE,
  ATTRIBUTE_MAGIC,
  ATTRIBUTE_WATER,
} from 'core/remix/state';
import { IconFiree } from 'design/icons/firee.icon';
import { IconWater } from 'design/icons/water.icon';
import { IconEarth } from 'design/icons/earth.icon';
import { IconCrsytal } from 'design/icons/crystal.icon';
import { IconTreasure } from 'design/icons/treasure.icon';
import { IconGather } from 'design/icons/gather.icon';

const IconSkill = ({ attribute }) => {
  const Icon = {
    [ATTRIBUTE_FIRE]: IconFiree,
    [ATTRIBUTE_WATER]: IconWater,
    [ATTRIBUTE_EARTH]: IconEarth,
    [ATTRIBUTE_MAGIC]: IconTreasure,
    [ATTRIBUTE_CRIT]: IconGather,
  }[attribute];

  return (!!Icon && <Icon />) || null;
};

export default IconSkill;
