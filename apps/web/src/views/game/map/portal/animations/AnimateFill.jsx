import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateFill = withTheme(
  ({ theme, children, position, ...props }) => {
    const minX = position > 90 ? 90 : position;

    const variants = {
      initial: {
        x: '-100%',
      },
      animate: {
        x: `-${minX}%`,
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
