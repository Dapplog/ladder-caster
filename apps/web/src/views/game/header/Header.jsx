import React from 'react';
import {
  _header,
  _container,
  _left,
  _right,
  _coin,
  _icon,
  _amount,
  _google,
  _button,
  _wallet,
  _speed,
  _controls,
} from './Header.styled';
import { withTheme } from 'styled-components';
import { IconMoneyBag } from 'design/icons/money-bag.icon';
import { IconWater } from 'design/icons/water.icon';
import { IconLeaf } from 'design/icons/leaf.icon';
import { IconFlame } from 'design/icons/flame.icon';
import { IconFiree } from 'design/icons/firee.icon';
import { IconMoney } from 'design/icons/money.icon';
import { useTranslation } from 'react-i18next';
import { IconPlay } from 'design/icons/play.icon';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  DEMO_MODE,
  GAME_OPTIONS,
  GAME_RESOURCES,
  TYPE_EARTH,
  TYPE_FIRE,
  TYPE_WATER,
} from 'core/remix/state';
import { useActions } from 'web/actions';
import { AnimateButton } from '../../../shared/button/animations/AnimateButton';
import { IconSkip } from 'design/icons/skip.icon';
import { IconGoogle } from '../../../../../libs/design/icons/google.icon';
import { IconWallet } from 'design/icons/wallet.icon';
import { CHAIN_LOCAL_WALLET } from 'chain/hooks/state';
import { useLocalWallet } from 'chain/hooks/useLocalWallet';

const Header = withTheme(({ theme }) => {
  const { t } = useTranslation();
  const { nextTurn } = useActions();
  const [demo, setDemo] = useRemix(DEMO_MODE);
  const [resources, setResources] = useRemix(GAME_RESOURCES);
  const [options, setOptions] = useRemix(GAME_OPTIONS);
  const { createLocalWallet } = useLocalWallet();
  const { startDemo } = useActions();

  const connectGoogle = () => {
    //  Change later
    createLocalWallet();
    startDemo();
  };

  return (
    <_header>
      <_container>
        <_left>
          <_coin>
            <_icon $background={theme.element['gold']}>
              <IconMoney />
            </_icon>
            {demo?.active && <_amount>{resources?.gold}</_amount>}
          </_coin>
          <_coin>
            <_icon $background={theme.element[TYPE_FIRE]}>
              <IconFiree />
            </_icon>
            {demo?.active && <_amount>{resources?.fire}</_amount>}
          </_coin>
          <_coin>
            <_icon $background={theme.element[TYPE_WATER]}>
              <IconWater />
            </_icon>
            {demo?.active && <_amount>{resources?.water}</_amount>}
          </_coin>
          <_coin>
            <_icon $background={theme.element[TYPE_EARTH]}>
              <IconLeaf />
            </_icon>
            {demo?.active && <_amount>{resources?.earth}</_amount>}
          </_coin>
        </_left>
        <_right>
          {!demo?.active && (
            <_google onClick={() => connectGoogle()}>
              <IconGoogle />
              <span>{t('home.google')}</span>
            </_google>
          )}
          {demo?.active && (
            <_controls>
              <_speed>
                {t('header.day')} {demo.num_ticks}
              </_speed>
            </_controls>
          )}
          {demo?.active && (
            <AnimateButton>
              <_button onClick={() => nextTurn()}>
                <IconSkip />
              </_button>
            </AnimateButton>
          )}
        </_right>
      </_container>
    </_header>
  );
});

export default Header;
