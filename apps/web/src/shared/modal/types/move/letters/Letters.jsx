import React from 'react';
import { _letters, _letter, _bar } from './Letters.styled';

const Letters = () => {
  return (
    <_letters>
      <_letter>
        <_bar />
        <span>A</span>
      </_letter>
      <_letter>
        <_bar />
        <span>B</span>
      </_letter>
      <_letter>
        <_bar />
        <span>C</span>
      </_letter>
    </_letters>
  );
};

export default Letters;
