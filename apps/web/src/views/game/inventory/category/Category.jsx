import React from 'react';
import { _category, _title, _items, _item, _cutout } from './Category.styled';
import {
  DRAWER_ACTIVE,
  GAME_INVENTORY,
  GAME_SPELLCASTERS,
  ITEM_BOOK,
  ITEM_GEM,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { useTranslation } from 'react-i18next';
import { IconHat } from 'design/icons/hat.icon';
import { IconCloak } from 'design/icons/cloak.icon';
import { IconStaff } from 'design/icons/staff.icon';
import { IconGem } from 'design/icons/gem.icon';
import { IconBook } from 'design/icons/book.icon';
import { filter, find } from 'lodash';
import Item from '../item/Item';

const Category = ({ type }) => {
  const { t } = useTranslation();
  const [inventory] = useRemix(GAME_INVENTORY);
  const [spellcasters] = useRemix(GAME_SPELLCASTERS);

  const title = {
    [ITEM_HAT]: t('inventory.title.hat'),
    [ITEM_ROBE]: t('inventory.title.robe'),
    [ITEM_STAFF]: t('inventory.title.staff'),
    [ITEM_GEM]: t('inventory.title.gem'),
    [ITEM_BOOK]: t('inventory.title.book'),
  }[type];

  const Icon = {
    [ITEM_HAT]: IconHat,
    [ITEM_ROBE]: IconCloak,
    [ITEM_STAFF]: IconStaff,
    [ITEM_GEM]: IconGem,
    [ITEM_BOOK]: IconBook,
  }[type];

  const item_type = {
    [ITEM_HAT]: 'hat',
    [ITEM_ROBE]: 'robe',
    [ITEM_STAFF]: 'staff',
    [ITEM_BOOK]: 'spell',
  }[type];

  const items_list = filter(inventory?.items, (item) => item.type === type);

  const min_items = items_list?.length > 7 ? items_list.length : 7;

  const items = () => {
    let list = [];

    const unequipped_items = filter(items_list, (item) => {
      return !find(
        spellcasters,
        (caster) => caster[item_type]?.id === item?.id,
      );
    });

    for (let i = 0; i < min_items; i++) {
      const item = unequipped_items[i];

      list.push(
        <_item>
          <_cutout>{item && <Item info={item} />}</_cutout>
        </_item>,
      );
    }
    return list;
  };

  return (
    <_category>
      <_title>
        <Icon />
        {title}
      </_title>
      <_items>{items()}</_items>
    </_category>
  );
};

export default Category;
