import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateLimit = withTheme(
  ({ theme, $hidden, children, ...props }) => {
    const variants = {
      initial: {
        opacity: 0,
        y: 2,
      },
      animate: {
        opacity: $hidden ? 0 : 1,
        y: 0,
        transition: {
          delay: 0.25,
          duration: 0.4,
          type: 'ease-out',
        },
      },
      exit: {
        opacity: 0,
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
        exit={'exit'}
        variants={variants}
        {...props}
      >
        {children}
      </LazyAnimations>
    );
  },
);
