import React from 'react';
import { _spell } from './Spell.styled';
import { _back, _header, _title } from '../move/Move.styled';
import { IconChevronLeft } from 'design/icons/chevron-left.icon';
import { IconMove } from 'design/icons/move.icon';
import { IconSpell } from '../../../../../../../../libs/design/icons/spell.icon';

const Spell = () => {
  return (
    <_spell>
      <_header>
        <_back>
          <IconChevronLeft />
          <span>Back</span>
        </_back>
        <_title>
          <IconSpell />
          <span>Spell</span>
        </_title>
      </_header>
    </_spell>
  );
};

export default Spell;
