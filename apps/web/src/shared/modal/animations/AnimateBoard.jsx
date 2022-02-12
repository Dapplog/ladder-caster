import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateBoard = withTheme(({ theme, children, ...props }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.25,
        duration: 0.4,
        type: 'spring',
        bounce: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      scale: 0,
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
