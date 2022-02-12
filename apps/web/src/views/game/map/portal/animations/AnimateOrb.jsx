import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateOrb = withTheme(
  ({ theme, children, active, left, center, right, ...props }) => {
    const variants = {
      initial: {
        x: 0,
        y: 0,
      },
      animate: {
        x: left ? -16 : right ? 16 : 0,
        y: left || right ? 12 : -20,
      },
      hover: {},
      tap: {},
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
