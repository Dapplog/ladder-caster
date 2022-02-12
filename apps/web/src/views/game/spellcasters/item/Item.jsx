import React from 'react';
import { _item, _inventory, _queue, _buy } from './Item.styled';
import Card from './card/Card';
import Queue from './queue/Queue';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  DRAWER_ACTIVE,
  SPELLCASTER_BUY,
  TABS_CHARACTER_ACTIONS,
} from 'core/remix/state';
import Buy from './buy/Buy';
import { useActions } from 'web/actions';

const Item = ({ spell_id }) => {
  const { tabCharacter } = useActions();
  const isBuy = spell_id === SPELLCASTER_BUY;

  return (
    <_item>
      <_inventory onClick={() => tabCharacter(spell_id)}>
        <Card spell_id={spell_id} />
      </_inventory>
      {isBuy && (
        <_buy>
          <Buy />
        </_buy>
      )}
      {!isBuy && (
        <_queue>
          <Queue spell_id={spell_id} />
        </_queue>
      )}
    </_item>
  );
};

export default Item;
