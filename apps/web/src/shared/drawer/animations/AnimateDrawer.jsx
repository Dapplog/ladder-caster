import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateDrawer = withTheme(
  ({ theme, children, active, height = 0, ...props }) => {
    const drawer_height = height + 100;

    const variants = {
      initial: {
        minHeight: `${drawer_height}px`,
        height: `${drawer_height}px`,
        y: 0,
      },
      animate: {
        minHeight: `${drawer_height}px`,
        height: `${drawer_height}px`,
        y: active ? -height + 72 : 16,
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
        watch={[drawer_height]}
        {...props}
      >
        {children}
      </LazyAnimations>
    );
  },
);
