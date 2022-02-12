import React, { useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const LazyAnimations = ({
  children,
  listen_key,
  watch = [],
  ...props
}) => {
  const key = useKeys(2, listen_key);

  const childrenWithProps =
    children &&
    useMemo(
      () =>
        React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ...key[0],
            ...props,
          }),
        ),
      [watch, children],
    );

  return useMemo(
    () => (
      <LazyMotion {...key[1]} features={domMax}>
        {childrenWithProps}
      </LazyMotion>
    ),
    [...watch, childrenWithProps],
  );
};
