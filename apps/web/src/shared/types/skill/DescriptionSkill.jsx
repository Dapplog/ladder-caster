import React from 'react';
import {
  ATTRIBUTE_CRIT,
  ATTRIBUTE_EARTH,
  ATTRIBUTE_FIRE,
  ATTRIBUTE_MAGIC,
  ATTRIBUTE_WATER,
} from 'core/remix/state';
import { _value } from '../../../views/game/inventory/drawer/attributes/Attributes.styled';
import { useTranslation } from 'react-i18next';

const DescriptionSkill = ({ attribute, value }) => {
  const { t } = useTranslation();

  const Description = {
    [ATTRIBUTE_FIRE]: (
      <_value $attribute={attribute}>
        {`${t('attribute.fire.desc1')}`}
        <b>+{value}</b>
        {`${t('attribute.fire.desc2')}`}
      </_value>
    ),
    [ATTRIBUTE_WATER]: (
      <_value $attribute={attribute}>
        {`${t('attribute.water.desc1')}`}
        <b>+{value}</b>
        {`${t('attribute.water.desc2')}`}
      </_value>
    ),
    [ATTRIBUTE_EARTH]: (
      <_value $attribute={attribute}>
        {`${t('attribute.earth.desc1')}`}
        <b>+{value}</b>
        {`${t('attribute.earth.desc2')}`}
      </_value>
    ),
    [ATTRIBUTE_CRIT]: (
      <_value $attribute={attribute}>
        {`${t('attribute.crit.desc1')}`}
        <b>{value}</b>
        {`${t('attribute.crit.desc2')}`}
      </_value>
    ),
    [ATTRIBUTE_MAGIC]: (
      <_value $attribute={attribute}>
        {`${t('attribute.magic.desc1')}`}
        <b>{value}</b>
        {`${t('attribute.magic.desc2')}`}
      </_value>
    ),
  }[attribute];

  return (!!Description && Description) || null;
};

export default DescriptionSkill;
