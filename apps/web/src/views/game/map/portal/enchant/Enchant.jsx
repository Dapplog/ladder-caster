import React from 'react';
import { _enchant } from './Enchant.styled';
import { IconCrsytal } from 'design/icons/crystal.icon';
import { IconBeaker } from 'design/icons/beaker.icon';
import { IconMoney } from 'design/icons/money.icon';
import { IconSparkle } from 'design/icons/sparkles.icon';
import { randomIntBetween } from 'core';

const Enchant = ({ location }) => {
  const enchant_icons = [
    () => <IconCrsytal />,
    () => <IconBeaker />,
    () => <IconMoney />,
    () => <IconSparkle />,
  ];

  const random_enchant = enchant_icons[randomIntBetween(0, 3)]?.();

  return (
    <_enchant $location={location}>
      {location && <span>{location}</span>}
      {random_enchant}
    </_enchant>
  );
};

export default Enchant;
