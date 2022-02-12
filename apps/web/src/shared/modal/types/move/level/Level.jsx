import React from 'react';
import { _level, _number, _bar } from './Level.styled';

const Level = ({ $right, level }) => {
  return (
    <_level $right={$right}>
      <_number $right={$right}>
        <_bar $right={$right} />
        <span>{level}</span>
      </_number>
    </_level>
  );
};

export default Level;
