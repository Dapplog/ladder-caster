import React from 'react';
import { _craft } from './Craft.styled';
import { _back, _header, _title } from '../move/Move.styled';
import { IconChevronLeft } from 'design/icons/chevron-left.icon';
import { IconSpell } from 'design/icons/spell.icon';
import { IconAnvil } from '../../../../../../../../libs/design/icons/anvil.icon';

const Craft = () => {
  return (
    <_craft>
      <_header>
        <_back>
          <IconChevronLeft />
          <span>Back</span>
        </_back>
        <_title>
          <IconAnvil />
          <span>Craft</span>
        </_title>
      </_header>
    </_craft>
  );
};

export default Craft;
