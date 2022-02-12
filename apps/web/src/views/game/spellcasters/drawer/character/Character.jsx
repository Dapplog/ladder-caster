import React from 'react';
import { _character, _equipment, _stats } from './Character.styled';
import Equipment from './equipment/Equipment';
import Stats from './stats/Stats';
import { _breakpoint } from '../Player.styled';

const Character = ({ caster }) => {
  return (
    <_character>
      <_equipment>
        <Equipment caster={caster} />
      </_equipment>
      <_breakpoint />
      <_stats>
        <Stats />
      </_stats>
    </_character>
  );
};

export default Character;
