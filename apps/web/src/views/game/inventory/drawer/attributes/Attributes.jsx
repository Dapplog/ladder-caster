import React from 'react';
import {
  _attributes,
  _value,
  _skill,
  _icon,
  _type,
  _description,
} from './Attributes.styled';
import { useTranslation } from 'react-i18next';
import {
  ATTRIBUTE_CRIT,
  ATTRIBUTE_EARTH,
  ATTRIBUTE_FIRE,
  ATTRIBUTE_MAGIC,
  ATTRIBUTE_WATER,
  ITEM_HAT,
  TIER_I,
  TIER_II,
  TIER_III,
  TIER_IV,
} from 'core/remix/state';
import IconSkill from '../../../../../shared/types/skill/IconSkill';
import DescriptionSkill from '../../../../../shared/types/skill/DescriptionSkill';

const Attributes = ({ info }) => {
  const { t } = useTranslation();
  const type = info?.type;
  const rarity = info?.rarity;
  const value = info?.value;
  const tier = info?.tier;
  const attribute = info?.attribute;
  const level = info?.level;

  const show_tier = {
    [TIER_I]: 'I',
    [TIER_II]: 'II',
    [TIER_III]: 'III',
    [TIER_IV]: 'IV',
  }[tier];

  const attribute_title = {
    [ATTRIBUTE_FIRE]: t('attribute.fire.title'),
    [ATTRIBUTE_WATER]: t('attribute.water.title'),
    [ATTRIBUTE_EARTH]: t('attribute.earth.title'),
    [ATTRIBUTE_CRIT]: t('attribute.crit.title'),
    [ATTRIBUTE_MAGIC]: t('attribute.magic.title'),
  }[attribute];

  return (
    <_attributes>
      {attribute && (
        <_skill>
          <_icon $attribute={attribute}>
            <IconSkill attribute={attribute} />
          </_icon>
          <_description>
            <DescriptionSkill attribute={attribute} value={value} />
          </_description>
        </_skill>
      )}
      {/*{tier &&*/}
      {/*  <_attribute>*/}
      {/*    <_name>{t('attribute.tier')}</_name>*/}
      {/*    <_value $tier>{show_tier}</_value>*/}
      {/*  </_attribute>*/}
      {/*}*/}
      {/*{level &&*/}
      {/*  <_attribute>*/}
      {/*    <_name>{t('attribute.level')}</_name>*/}
      {/*    <_value>{level}</_value>*/}
      {/*  </_attribute>*/}
      {/*}*/}
    </_attributes>
  );
};

export default Attributes;
