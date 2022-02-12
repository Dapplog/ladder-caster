import React from 'react';
import { _craft, _button } from './Craft.styled';
import { IconTreasure } from 'design/icons/treasure.icon';
import { AnimateButton } from '../../../../shared/button/animations/AnimateButton';

const Craft = () => {
  return (
    <_craft>
      <AnimateButton high>
        <_button>
          <IconTreasure />
          <span>Craft</span>
        </_button>
      </AnimateButton>
    </_craft>
  );
};

export default Craft;
