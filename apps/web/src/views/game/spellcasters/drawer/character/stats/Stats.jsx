import React from 'react';
import { _stats, _row, _bonus } from './Stats.styled';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  return (
    <_stats>
      <_row></_row>
      <_row></_row>
      <_row></_row>
    </_stats>
  );
};

export default Stats;
