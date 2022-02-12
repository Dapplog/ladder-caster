import React from 'react';
import { _nav, _item, _button } from './Nav.styled';
import {
  PRIVATE_SPELLCASTERS,
  PRIVATE_MAP,
  PRIVATE_INVENTORY,
  PRIVATE_MARKET,
  PRIVATE_HOME,
} from 'core/routes/routes';
import { useRemix } from 'core/hooks/remix/useRemix';
import { DEMO_MODE, DRAWER_ACTIVE } from 'core/remix/state';
import { IconMarketplace } from 'design/icons/marketplace.icon';
import { useLocation } from 'react-router-dom';
import { IconBag } from 'design/icons/bag.icon';
import { IconHat } from 'design/icons/hat.icon';
import { IconMap } from 'design/icons/map.icon';
import { IconHome } from 'design/icons/home.icon';
import { useTranslation } from 'react-i18next';
import { AnimateButton } from '../../../shared/button/animations/AnimateButton';

const Nav = () => {
  const { t } = useTranslation();
  const [drawer, setDrawer] = useRemix(DRAWER_ACTIVE);
  const { pathname } = useLocation();

  return (
    <_nav>
      <_item to={PRIVATE_MARKET} onClick={() => setDrawer('')}>
        <AnimateButton low active={pathname === PRIVATE_MARKET}>
          <_button $first $active={pathname === PRIVATE_MARKET}>
            <IconMarketplace />
            <span>{t('nav.market')}</span>
          </_button>
        </AnimateButton>
      </_item>
      <_item to={PRIVATE_INVENTORY} onClick={() => setDrawer('')}>
        <AnimateButton low active={pathname === PRIVATE_INVENTORY}>
          <_button $active={pathname === PRIVATE_INVENTORY}>
            <IconBag />
            <span>{t('nav.bag')}</span>
          </_button>
        </AnimateButton>
      </_item>
      <_item to={PRIVATE_HOME} onClick={() => setDrawer('')}>
        <AnimateButton low active={pathname === PRIVATE_HOME}>
          <_button $active={pathname === PRIVATE_HOME}>
            <IconHome />
            <span>{t('nav.home')}</span>
          </_button>
        </AnimateButton>
      </_item>
      <_item to={PRIVATE_SPELLCASTERS} onClick={() => setDrawer('')}>
        <AnimateButton low active={pathname === PRIVATE_SPELLCASTERS}>
          <_button $active={pathname === PRIVATE_SPELLCASTERS}>
            <IconHat />
            <span>{t('nav.casters')}</span>
          </_button>
        </AnimateButton>
      </_item>
      <_item to={PRIVATE_MAP} onClick={() => setDrawer('')}>
        <AnimateButton low active={pathname === PRIVATE_MAP}>
          <_button $last $active={pathname === PRIVATE_MAP}>
            <IconMap />
            <span>{t('nav.map')}</span>
          </_button>
        </AnimateButton>
      </_item>
    </_nav>
  );
};

export default Nav;
