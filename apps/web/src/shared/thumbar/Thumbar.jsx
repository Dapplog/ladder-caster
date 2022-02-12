import React from 'react';
import { _thumbar, _container } from './Thumbar.styled';

const Thumbar = ({ children, scroll_ref }) => {
  return (
    <_thumbar>
      <_container>{children}</_container>
    </_thumbar>
  );
};

export default Thumbar;
