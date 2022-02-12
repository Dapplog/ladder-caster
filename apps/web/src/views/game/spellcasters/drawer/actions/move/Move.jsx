import React from 'react';
import {
  _move,
  _header,
  _back,
  _title,
  _map,
  _row,
  _action,
} from './Move.styled';
import { IconChevronLeft } from 'design/icons/chevron-left.icon';
import { IconMove } from 'design/icons/move.icon';

const Move = () => {
  return (
    <_move>
      <_header>
        <_back>
          <IconChevronLeft />
          <span>Back</span>
        </_back>
        <_title>
          <IconMove />
          <span>Move</span>
        </_title>
      </_header>
      <_map>
        <_row></_row>
        <_row></_row>
      </_map>
      <_action></_action>
    </_move>
  );
};

export default Move;
