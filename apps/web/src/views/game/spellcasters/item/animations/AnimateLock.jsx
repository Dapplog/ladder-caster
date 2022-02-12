import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateLock = withTheme(({ theme, children, ...props }) => {
  const variants = {
    initial: {
      scale: 0,
      rotate: -180,
    },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.25,
        duration: 0.5,
        type: 'spring',
        bounce: 0.5,
      },
    },
    exit: {
      scale: 0,
      rotate: 180,
      transition: {
        delay: 0.25,
        duration: 0.5,
        type: 'spring',
        bounce: 0.5,
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
      exit={'exit'}
      variants={variants}
      {...props}
    >
      {children}
    </LazyAnimations>
  );
});
