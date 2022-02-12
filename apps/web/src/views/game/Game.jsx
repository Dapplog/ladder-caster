import React, {
  useRef,
  useState,
  useLayoutEffect,
  useMemo,
  useEffect,
} from 'react';
import {
  _game,
  _container,
  _mobile,
  _screen,
  _view,
  _download,
  _dots,
  _app_store,
  _store,
} from './Game.styled';
import Nav from './nav/Nav';
import { useParams } from 'react-router-dom';
import Spellcasters from './spellcasters/Spellcasters';
import {
  VIEW_SPELLCASTERS,
  VIEW_MAP,
  VIEW_INVENTORY,
  PUBLIC_HOME,
  VIEW_HOME,
  VIEW_MARKET,
} from 'core/routes/routes';
import Map from './map/Map';
import Market from './market/Market';
import Inventory from './inventory/Inventory';
import Drawer from '../../shared/drawer/Drawer';
import { useSize } from 'core/hooks/useSize';
import Header from './header/Header';
import { useMobileHeight } from 'core/hooks/useMobileHeight';
import { AnimateMobile } from './animations/AnimateMobile';
import Dashboard from './home/Dashboard';
import { IconMore } from 'design/icons/more.icon';
import { Link } from 'react-router-dom';
import { IconApple } from 'design/icons/apple.icon';
import { IconAndroid } from 'design/icons/android.icon';
import Player from './spellcasters/drawer/Player';
import Modal from '../../shared/modal/Modal';
import Assistant from './home/drawer/Assistant';
import Land from './map/drawer/Land';
import Items from './inventory/drawer/Items';
import Trade from './market/drawer/Trade';
import { AnimateButton } from '../../shared/button/animations/AnimateButton';
import { useEventListener } from 'core/hooks/useEventListener';
import { AnimatePresence, domMax, LazyMotion, motion } from 'framer-motion';
import {
  CHAIN_LOCAL_CONNECTION,
  CHAIN_LOCAL_WALLET,
  CHAIN_PROGRAM,
  CHAIN_GAME,
} from 'chain/hooks/state';
import { useProgram } from 'chain/hooks/useProgram';
import { useRemix } from 'core/hooks/remix/useRemix';
import { useGame } from 'chain/hooks/useGame';
import { UNEQUIP_ITEM } from 'core/remix/state';
// import { getMap } from 'core-js';

const Game = ({ children }) => {
  const [dh, setDrawerHeight] = useState();
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const [conn] = useRemix(CHAIN_LOCAL_CONNECTION);
  const [program] = useRemix(CHAIN_PROGRAM);
  const [unequip] = useRemix(UNEQUIP_ITEM);
  const [game] = useRemix(CHAIN_GAME);
  const { getProgram } = useProgram();
  const { getGame } = useGame();
  const screen_ref = useRef();
  const { height } = useSize(screen_ref);
  const { vh } = useMobileHeight();
  const { view } = useParams();
  const view_ref = useRef();

  const refreshHeight = () => {
    let next_height = view_ref?.current?.offsetHeight;
    if (next_height && next_height !== dh) setDrawerHeight(next_height);
  };

  const Drawers = {
    [VIEW_HOME]: Assistant,
    [VIEW_INVENTORY]: Items,
    [VIEW_SPELLCASTERS]: unequip ? Items : Player,
    [VIEW_MAP]: Land,
    [VIEW_MARKET]: Trade,
  }[view];

  const variants = {
    initial: {
      y: 8,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      y: 16,
      opacity: 0,
    },
  };

  const View = ({ children, $key }) => {
    return useMemo(
      () => (
        <motion.div {...variants} key={$key}>
          {children}
        </motion.div>
      ),
      [children],
    );
  };

  const animate_views = useMemo(
    () => (
      <AnimatePresence exitBeforeEnter>
        {!view || view === VIEW_HOME ? (
          <View key={'view-home'} $key={'view-home-motion'}>
            <Dashboard />
          </View>
        ) : null}
        {view === VIEW_INVENTORY && (
          <View key={'view-inventory'} $key={'view-inventory-motion'}>
            <Inventory />
          </View>
        )}
        {view === VIEW_SPELLCASTERS && (
          <View key={'view-spellcasters'} $key={'view-spellcasters-motion'}>
            <Spellcasters />
          </View>
        )}
        {view === VIEW_MAP && (
          <View key={'view-map'} $key={'view-map-motion'}>
            <Map />
          </View>
        )}
        {view === VIEW_MARKET && (
          <View key={'view-market'} $key={'view-market-motion'}>
            <Market />
          </View>
        )}
      </AnimatePresence>
    ),
    [view],
  );

  useLayoutEffect(() => refreshHeight(), []);
  useEventListener('resize', () => refreshHeight());
  useEventListener('scroll', () => refreshHeight());

  useEffect(() => {
    if (wallet && conn) getProgram(conn, wallet);
  }, [wallet, conn]);

  useEffect(() => {
    if (program) getGame(program);
  }, [program]);

  useEffect(() => {
    // if (game) getMap();
  });

  return (
    <_game $vh={vh}>
      <AnimateMobile $vh={vh}>
        <_mobile $vh={vh}>
          <_download>
            <Link to={PUBLIC_HOME}>
              <span>LadderCaster</span>
              <b>
                <span>Demo</span>
              </b>
            </Link>
            <_dots>
              <_app_store>
                <AnimateButton high>
                  <_store>
                    <IconApple />
                  </_store>
                </AnimateButton>
                <AnimateButton high>
                  <_store>
                    <IconAndroid />
                  </_store>
                </AnimateButton>
              </_app_store>
              <IconMore />
            </_dots>
          </_download>
          <_screen ref={screen_ref}>
            <Modal screen_height={height} />
            <Header />
            <_view ref={view_ref}>
              <_container>
                <LazyMotion features={domMax}>{animate_views}</LazyMotion>
              </_container>
              <Drawer height={dh}>{Drawers ? <Drawers /> : null}</Drawer>
            </_view>
            <Nav />
          </_screen>
        </_mobile>
      </AnimateMobile>
    </_game>
  );
};

export default Game;
