import React from 'react';
import { _header, _container, _left, _right, _link } from './Header.styled';
import { PUBLIC_HOME, PUBLIC_GAME } from 'core/routes/routes';
import { useLocation } from 'react-router';

const Header = () => {
  const { pathname } = useLocation();
  const isGame = pathname?.includes(PUBLIC_GAME);

  return (
    <_header $active={!isGame}>
      <_container>
        <_left>
          <_link to={PUBLIC_HOME}>LadderCaster</_link>
        </_left>
        <_right>{!isGame && <_link to={PUBLIC_GAME}>Demo</_link>}</_right>
      </_container>
    </_header>
  );
};

export default Header;
