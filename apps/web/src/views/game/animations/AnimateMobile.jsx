import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateMobile = withTheme(
  ({ theme, children, position, width, $vh, ...props }) => {
    const variants = {
      initial: {
        height: `calc((${$vh}px * 100) - 4px)`,
        width: `${$vh * 50}px`,
      },
      animate: {
        height: `calc((${$vh}px * 100) - 4px)`,
        width: `${$vh * 50}px`,
        transition: {
          duration: 0.1,
          ease: 'easeIn',
        },
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
