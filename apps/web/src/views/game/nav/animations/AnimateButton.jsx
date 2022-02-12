import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateButton = withTheme(
  ({ theme, children, $hidden, active, ...props }) => {
    const variants = {
      initial: {
        opacity: 0,
        y: 32,
      },
      animate: {
        opacity: $hidden ? 0 : 1,
        scale: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        scale: 0,
      },
      hover: {
        scale: 1.05,
        y: 0,
      },
      tap: {
        scale: 0.95,
        y: 0,
      },
    };

    return (
      <LazyAnimations
        initial={'initial'}
        animate={'animate'}
        whileHover={'hover'}
        whileTap={'tap'}
        exit={'exit'}
        variants={variants}
        {...props}
      >
        {children}
      </LazyAnimations>
    );
  },
);
