import React from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';

export const AnimateButton = withTheme(({ theme, children, ...props }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
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
});
