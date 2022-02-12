import React, { useRef } from 'react';
import {
  _equipment,
  _body,
  _hat,
  _cloak,
  _staff,
  _spells,
  _spell,
  _inner,
  _empty,
  _gem,
  _shaft,
} from './Equipment.styled';
import { useSize } from 'core/hooks/useSize';
import { IconHat } from 'design/icons/hat.icon';
import { IconBook } from 'design/icons/book.icon';
import { IconStaff } from 'design/icons/staff.icon';
import { IconGem } from 'design/icons/gem.icon';
import { IconCloak } from 'design/icons/cloak.icon';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  ACTION_EQUIP,
  ACTION_VIEW,
  ITEM_BOOK,
  ITEM_GEM,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
} from 'core/remix/state';
import Item from '../../../../inventory/item/Item';
import { useActions } from '../../../../../../../actions';

const Equipment = ({ caster }) => {
  const equip_ref = useRef();
  const { chooseUnequip } = useActions();
  const [action, setAction] = useRemix(ACTION_VIEW);
  const { width } = useSize(equip_ref);
  const hat = caster?.hat;
  const robe = caster?.robe;
  const staff = caster?.staff;
  const spell = caster?.spell;

  const height = width - 32;

  const next_action = (item_type) => ({
    type: ACTION_EQUIP,
    item_type,
  });

  return (
    <_equipment ref={equip_ref} $height={height}>
      <_body>
        <_hat onClick={() => chooseUnequip(hat, caster)}>
          <_inner $scale={0.95}>
            {hat ? <Item equipped info={hat} /> : <IconHat />}
          </_inner>
        </_hat>
        <_cloak onClick={() => chooseUnequip(robe, caster)}>
          <_inner $scale={1.1}>
            {robe ? <Item equipped info={robe} /> : <IconCloak />}
          </_inner>
        </_cloak>
      </_body>
      <_staff>
        <_spell onClick={() => chooseUnequip(spell, caster)}>
          <_inner>
            {spell ? <Item equipped info={spell} /> : <IconBook />}
          </_inner>
        </_spell>
        <_shaft $scale={1.2} onClick={() => chooseUnequip(staff, caster)}>
          <_inner $scale={1.4} $staff={'45deg'}>
            {staff ? <Item equipped info={staff} /> : <IconStaff />}
          </_inner>
        </_shaft>
      </_staff>
      <_empty></_empty>
    </_equipment>
  );
};

export default Equipment;
