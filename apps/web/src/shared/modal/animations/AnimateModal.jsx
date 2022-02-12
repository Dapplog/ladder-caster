import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateModal = withTheme(({ theme, children, ...props }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 600,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
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
