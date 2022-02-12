import React from 'react';
import {
  ITEM_BOOK,
  ITEM_GEM,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
} from 'core/remix/state';
import { IconHat } from 'design/icons/hat.icon';
import { IconCloak } from 'design/icons/cloak.icon';
import { IconStaff } from 'design/icons/staff.icon';
import { IconGem } from 'design/icons/gem.icon';
import { IconBook } from 'design/icons/book.icon';

const IconElement = ({ type }) => {
  const Icon = {
    [ITEM_HAT]: IconHat,
    [ITEM_ROBE]: IconCloak,
    [ITEM_STAFF]: IconStaff,
    [ITEM_GEM]: IconGem,
    [ITEM_BOOK]: IconBook,
  }[type];

  return (!!Icon && <Icon />) || null;
};

export default IconElement;
