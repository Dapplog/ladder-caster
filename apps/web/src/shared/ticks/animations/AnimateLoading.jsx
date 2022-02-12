import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';
import { useRemix } from 'core/hooks/remix/useRemix';
import { GAME_OPTIONS } from 'core/remix/state';

export const AnimateLoading = withTheme(
  ({ theme, children, position, ...props }) => {
    const [options] = useRemix(GAME_OPTIONS);

    const variants = {
      initial: {
        x: `0%`,
      },
      animate: {
        x: `0%`,
        transition: {
          type: 'tween',
          stiffness: 100,
          duration: options?.speed || 20,
          ease: 'linear',
        },
      },
      hover: {},
      tap: {},
      transition: {},
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
