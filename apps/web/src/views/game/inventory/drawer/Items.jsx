import React, { useRef, useMemo } from 'react';
import {
  _items,
  _header,
  _container,
  _title,
  _image,
  _body,
  _wrapper,
  _visual,
  _power,
  _scroll,
  _type,
  _name,
  _rarity,
  _tier,
  _attribute,
  _equipment,
  _equip,
  _text,
  _shadow,
  _gradient,
} from './Items.styled';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  DRAWER_ACTIVE,
  EQUIP_ITEM,
  GAME_SPELLCASTERS,
  ITEM_BOOK,
  ITEM_GEM,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
  UNEQUIP_ITEM,
} from 'core/remix/state';
import { AnimateButton } from '../../../../shared/button/animations/AnimateButton';
import { _close, _icon } from '../../spellcasters/drawer/rank/Rank.styled';
import { IconClose } from 'design/icons/close.icon';
import IconItem from '../../../../shared/types/items/IconItem';
import TitleItem from '../../../../shared/types/items/TitleItem';
import Item from '../item/Item';
import { useSize } from 'core/hooks/useSize';
import Attributes from './attributes/Attributes';
import { useTranslation } from 'react-i18next';
import RarityTitle from '../../../../shared/types/rarity/RarityTitle';
import AttributeItem from '../../../../shared/types/items/AttributeItem';
import { _breakpoint } from '../../spellcasters/drawer/Player.styled';
import { useActions } from '../../../../../actions';
import { find } from 'lodash';
import Equip from './equip/Equip';

const Items = () => {
  const { t } = useTranslation();
  const { unequipItem } = useActions();
  const [equip, setEquip] = useRemix(EQUIP_ITEM);
  const [unequip] = useRemix(UNEQUIP_ITEM);
  const image_ref = useRef();
  const { width } = useSize(image_ref);
  const [item, setDrawer] = useRemix(DRAWER_ACTIVE);
  const type = item?.type;
  const rarity = item?.rarity;

  const level = item?.level;
  const attribute = item?.attribute;

  return (
    <_items>
      <_header>
        <_container>
          <_type>
            <IconItem type={type} />
            <_title>
              <_rarity $rarity={rarity}>
                <RarityTitle rarity={rarity} />
              </_rarity>
              <_name>
                <TitleItem type={type} />
              </_name>
            </_title>
          </_type>
          <_title $right>
            <_attribute $attribute={attribute}>
              <AttributeItem attribute={attribute} />
            </_attribute>
            <_tier $right>
              {t('attribute.level').toUpperCase()} <span>{level}</span>
            </_tier>
          </_title>
        </_container>
        <_close>
          <AnimateButton high>
            <_icon onClick={() => setDrawer('')}>
              <IconClose />
            </_icon>
          </AnimateButton>
        </_close>
      </_header>
      <_breakpoint />
      <_scroll>
        {equip ? (
          <Equip />
        ) : (
          <_body>
            <_visual>
              <_image ref={image_ref} $height={width}>
                <Item info={item} />
              </_image>
              <_power $height={width} $rarity={rarity} />
            </_visual>
            <_equipment>
              <AnimateButton active key={'button-equip-button'}>
                <_equip
                  disabled={equip}
                  key={'button-equip-item'}
                  onClick={() =>
                    unequip
                      ? unequipItem(unequip?.item, unequip?.caster)
                      : setEquip(item)
                  }
                >
                  {unequip
                    ? t('item.remove').toUpperCase()
                    : t('item.equip').toUpperCase()}
                </_equip>
              </AnimateButton>
              <_text>
                <span>
                  {equip ? `#0001 ${t('notice.unequip')}` : t('notice.equip')}
                </span>
              </_text>
              <_shadow>
                <_gradient />
              </_shadow>
            </_equipment>
            <_wrapper>
              <Attributes info={item} />
            </_wrapper>
          </_body>
        )}
      </_scroll>
    </_items>
  );
};

export default Items;
