import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ATTRIBUTE_CRIT,
  ATTRIBUTE_EARTH,
  ATTRIBUTE_FIRE,
  ATTRIBUTE_MAGIC,
  ATTRIBUTE_WATER,
} from 'core/remix/state';
import { IconTreasure } from 'design/icons/treasure.icon';
import { IconExp } from 'design/icons/xp.icon';
import { IconEarth } from 'design/icons/earth.icon';
import { IconWater } from 'design/icons/water.icon';
import { IconFiree } from 'design/icons/firee.icon';

const AttributeIcon = ({ attribute }) => {
  const Attribute = {
    [ATTRIBUTE_FIRE]: IconFiree,
    [ATTRIBUTE_WATER]: IconWater,
    [ATTRIBUTE_EARTH]: IconEarth,
    [ATTRIBUTE_MAGIC]: IconTreasure,
    [ATTRIBUTE_CRIT]: IconExp,
  }[attribute];

  return Attribute;
};

export default AttributeIcon;
