import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ATTRIBUTE_CRIT,
  ATTRIBUTE_EARTH,
  ATTRIBUTE_FIRE,
  ATTRIBUTE_MAGIC,
  ATTRIBUTE_WATER,
} from 'core/remix/state';

const AttributeItem = ({ attribute }) => {
  const { t } = useTranslation();

  return (
    {
      [ATTRIBUTE_FIRE]: t('attribute.name.fire'),
      [ATTRIBUTE_WATER]: t('attribute.name.water'),
      [ATTRIBUTE_EARTH]: t('attribute.name.earth'),
      [ATTRIBUTE_MAGIC]: t('attribute.name.magic'),
      [ATTRIBUTE_CRIT]: t('attribute.name.crit'),
    }[attribute]?.toUpperCase() || null
  );
};

export default AttributeItem;
