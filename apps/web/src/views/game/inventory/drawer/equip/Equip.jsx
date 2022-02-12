import React, { useMemo } from 'react';
import {
  _equip,
  _caster,
  _item,
  _current,
  _arrow,
  _empty,
  _player,
  _next,
  _compare,
  _from,
  _to,
  _choose,
  _button,
  _image,
} from './Equip.styled';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  EQUIP_ITEM,
  GAME_SPELLCASTERS,
  ITEM_BOOK,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
  TIER_I,
} from 'core/remix/state';
import { sortBy, map } from 'lodash';
import NFT from '../../../../../shared/nft/NFT';
import { IconArrow } from '../../../../../../../libs/design/icons/arrow.icon';
import { IconCloak } from 'design/icons/cloak.icon';
import { IconBook } from 'design/icons/book.icon';
import { IconStaff } from 'design/icons/staff.icon';
import { IconHat } from 'design/icons/hat.icon';
import Item from '../../item/Item';
import { AnimateButton } from '../../../../../shared/button/animations/AnimateButton';
import { IconProfile } from '../../../../../../../libs/design/icons/profile.icon';
import { IconChevronRight } from '../../../../../../../libs/design/icons/chevron-right.icon';
import AttributeItem from '../../../../../shared/types/items/AttributeItem';
import AttributeIcon from '../../../../../shared/types/items/AttributeIcon';
import { useActions } from '../../../../../../actions';

const Equip = () => {
  const { equipItem } = useActions();
  const [equip, setEquip] = useRemix(EQUIP_ITEM);
  const [spellcasters] = useRemix(GAME_SPELLCASTERS);

  const sort_casters = useMemo(() => {
    return sortBy(spellcasters, ['xp']);
  }, [spellcasters]);

  const item_type = {
    [ITEM_ROBE]: 'robe',
    [ITEM_BOOK]: 'spell',
    [ITEM_STAFF]: 'staff',
    [ITEM_HAT]: 'hat',
  }[equip?.type];

  const EmptyIcon = {
    [ITEM_ROBE]: IconCloak,
    [ITEM_BOOK]: IconBook,
    [ITEM_STAFF]: IconStaff,
    [ITEM_HAT]: IconHat,
  }[equip?.type];

  const equip_casters = useMemo(() => {
    if (sort_casters)
      return map(sort_casters, (caster) => {
        const hasEquipped = caster?.[item_type];
        const from_attribute = hasEquipped?.attribute;
        const to_attribute = equip?.attribute;

        return (
          <AnimateButton high active>
            <_caster onClick={() => equipItem(equip, caster)}>
              <_item>
                <_player>
                  <IconProfile />
                </_player>
                <_current>
                  {hasEquipped ? (
                    <Item info={hasEquipped} />
                  ) : (
                    <_empty>{!!EmptyIcon && <EmptyIcon />}</_empty>
                  )}
                </_current>
                <_arrow>
                  <IconArrow />
                </_arrow>
                <_next>
                  <Item info={equip} />
                </_next>
              </_item>
              <_compare>
                <_from>
                  {from_attribute && (
                    <AttributeIcon attribute={from_attribute} />
                  )}
                </_from>
                <_to>
                  {to_attribute && <AttributeIcon attribute={to_attribute} />}
                </_to>
              </_compare>
              <_choose>
                <IconChevronRight />
              </_choose>
            </_caster>
          </AnimateButton>
        );
      });
  }, [sort_casters]);

  return <_equip>{equip_casters}</_equip>;
};

export default Equip;
