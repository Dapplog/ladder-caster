import React, { useRef } from 'react';
import {
  _spotlight,
  _container,
  _float,
  _lights,
  _background,
  _gradient,
  _content,
  _rotate,
} from './Spotlight.styled';
import { useSize } from 'core/hooks/useSize';

const Spotlight = ({ children }) => {
  const spot_ref = useRef();
  const { width, height } = useSize(spot_ref);

  const spotlight = (position) => (
    <_float>
      <_lights $position={position} />
    </_float>
  );

  return (
    <_spotlight ref={spot_ref}>
      <_container>
        <_background>
          <_gradient $width={width} $height={height} />
        </_background>
        <_background>
          <_rotate $width={width} $height={height}>
            {spotlight(1)}
            {spotlight(2)}
            {spotlight(3)}
            {spotlight(4)}
            {spotlight(5)}
            {spotlight(6)}
            {spotlight(7)}
            {spotlight(8)}
          </_rotate>
        </_background>
        <_background>
          <_content $width={width} $height={height}>
            {children}
          </_content>
        </_background>
      </_container>
    </_spotlight>
  );
};

export default Spotlight;
