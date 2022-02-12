import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateButton = withTheme(
  ({ theme, children, low, high, element, active, disabled, ...props }) => {
    const variants = {
      initial: {
        background: element
          ? theme[element]?.['button']
          : theme.background[
              active
                ? 'button_active'
                : high
                ? 'button_high'
                : low
                ? 'button_low'
                : disabled
                ? 'button_disabled'
                : 'button'
            ],
      },
      animate: {
        background: element
          ? theme[element]?.['button']
          : theme.background[
              active
                ? 'button_active'
                : high
                ? 'button_high'
                : low
                ? 'button_low'
                : disabled
                ? 'button_disabled'
                : 'button'
            ],
      },
      hover: {},
      tap: {
        background: element
          ? theme[element]?.['tap']
          : disabled
          ? theme.background['button_disabled']
          : active
          ? theme.background['button_active']
          : theme.tap['button_high'],
      },
    };

    return (
      <LazyAnimations
        initial={'initial'}
        animate={'animate'}
        whileHover={'hover'}
        whileTap={'tap'}
        variants={variants}
        {...props}
      >
        {children}
      </LazyAnimations>
    );
  },
);
