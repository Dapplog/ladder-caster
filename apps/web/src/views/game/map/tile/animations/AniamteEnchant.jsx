import React, { useMemo } from 'react';
import { LazyAnimations } from 'design/animations';
import { withTheme } from 'styled-components';
import {
  TILE_ACTIVE,
  TILE_CHIP,
  TILE_DISABLED,
  TILE_GLOWING,
} from 'core/remix/state';

export const AnimateEnchant = withTheme(
  ({
    theme,
    children,
    position,
    status,
    move_to,
    $casters,
    width,
    $vh,
    ...props
  }) => {
    const disabled = 0.25;
    const faded = 0.45;
    const chip = 0.65;
    const active = 1;

    const opacity = useMemo(() => {
      const controlled = {
        [TILE_DISABLED]: disabled,
        [TILE_ACTIVE]: active,
        [TILE_GLOWING]: active,
        [TILE_CHIP]: chip,
      }[status];

      if (move_to) return active;
      else if (controlled) return controlled;
      else if ($casters) return active;
      else return faded;
    }, [status, move_to, $casters]);

    const transition = useMemo(() => {
      const glowing = {
        [TILE_GLOWING]: {
          from: 0.45,
          repeat: status === TILE_GLOWING ? Infinity : 0,
          repeatType: 'reverse',
          duration: 0.69,
        },
      }[status];

      if (glowing && !move_to) return glowing;
      else return undefined;
    }, [status, move_to]);

    const variants = {
      initial: {
        opacity: 0.25,
      },
      animate: {
        opacity,
        transition,
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
        listen_key={move_to}
        variants={variants}
        {...props}
      >
        {children}
      </LazyAnimations>
    );
  },
);
