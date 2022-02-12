import React, { useState, useMemo, useEffect } from 'react';
import {
  _home,
  _header,
  _title,
  _feed,
  _section,
  _description,
  _button,
  _actions,
  _item,
  _step,
  _order,
  _task,
  _divider,
} from './Dashboard.styled';
import { useChain } from 'chain';
import { useTranslation } from 'react-i18next';
import { TicksInstance } from '../../../../App';
import { IconPlay } from 'design/icons/play.icon';
import { IconWallet } from 'design/icons/wallet.icon';
import { DEMO_MODE, GAME_MAP, TIER_I } from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';
import { useActions } from 'web/actions';
import { IconHat } from 'design/icons/hat.icon';
import { IconMap } from 'design/icons/map.icon';
import { AnimateButton } from '../../../shared/button/animations/AnimateButton';
import { findProgramAddressSync } from '@project-serum/anchor/.rollup.cache/home/armaniferrante/Documents/code/src/github.com/project-serum/anchor/ts/types/src/utils/pubkey';
import { Buffer } from 'buffer';
import { map as _map } from 'lodash';
import { nanoid } from 'nanoid';
import { useLocalWallet } from 'chain/hooks/useLocalWallet';
import { _controls, _speed } from '../header/Header.styled';
import { CHAIN_LOCAL_WALLET } from 'chain/hooks/state';
import { _wallet } from '../inventory/Inventory.styled';

const Dashboard = () => {
  const { t } = useTranslation();
  const [demo, setDemo] = useRemix(DEMO_MODE);
  const [map, setMap] = useRemix(GAME_MAP);
  const { createLocalWallet } = useLocalWallet();
  const { startDemo, visitCasters, visitMap } = useActions();
  const [local, setLocal] = useState();
  const program = local?.program;
  const [next_map, setNextMap] = useState();
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const publicKey = wallet?.publicKey?.toString();
  const short_public = `...${publicKey?.substring(
    publicKey?.length - 6,
    publicKey?.length,
  )}`;

  const connectGoogle = () => {
    createLocalWallet();
    startDemo();
  };

  let new_map = map ? [...map] : [];

  // const getMap = () => {
  //   return local?.program.account.game.fetch(game[0]);
  // };
  //
  // useEffect(() => {
  //   if (local && program && game)
  //     getMap().then((success) => setNextMap(success));
  // }, [local, program, game]);

  useEffect(() => {
    if (next_map) {
      const show_map = _map(next_map?.map, (tile) => {
        const col = {
          ['1']: 'a',
          ['2']: 'b',
          ['3']: 'c',
        }[`${tile.column}`];

        return {
          level: tile.level,
          remaining: tile.life,
          tier: TIER_I,
          type: Object.keys(tile.feature)[0],
          id: nanoid(),
          col,
        };
      });

      new_map[0] = {
        a: show_map[0],
        b: show_map[1],
        c: show_map[2],
        level: show_map[0].level,
      };

      setMap(new_map);
    }
  }, [next_map]);

  const active = demo?.active;

  return (
    <_home>
      <_header>
        <_title>
          <span>{t('title.home')}</span>
          {demo?.active && (
            <_wallet>
              <span>{short_public}</span>
              <IconWallet />
            </_wallet>
          )}
        </_title>
        {TicksInstance}
        <_divider />
      </_header>

      {active !== undefined && (
        <_feed>
          {!active && (
            <_section>
              <_description>{t('home.description')}</_description>
              <_actions>
                <AnimateButton high>
                  <_button onClick={() => connectGoogle()}>
                    <IconWallet />
                    <span>{t('connect.wallet')}</span>
                  </_button>
                </AnimateButton>
                <AnimateButton low>
                  <_button onClick={() => connectGoogle()}>
                    <IconWallet />
                    <span>{t('connect.local_wallet')}</span>
                  </_button>
                </AnimateButton>
              </_actions>
            </_section>
          )}
          {active && (
            <_step>
              <_order>1</_order>
              <_item>
                <_task>{t('home.task.spellcasters')}</_task>
                <_actions>
                  <AnimateButton low>
                    <_button onClick={() => visitCasters()}>
                      <IconHat />
                      <span>{t('visit.casters')}</span>
                    </_button>
                  </AnimateButton>
                </_actions>
              </_item>
            </_step>
          )}
          {active && (
            <_step>
              <_order>2</_order>
              <_item>
                <_task $disabled>{t('home.task.map')}</_task>
                <_actions>
                  <_button disabled $disabled onClick={() => visitMap()}>
                    <IconMap />
                    <span>{t('visit.map')}</span>
                  </_button>
                </_actions>
              </_item>
            </_step>
          )}
          {active && (
            <_step>
              <_order>3</_order>
              <_item>
                <_task $disabled>{t('home.task.actions')}</_task>
                <_actions>
                  <_button disabled $disabled onClick={() => visitCasters()}>
                    <IconHat />
                    <span>{t('visit.casters')}</span>
                  </_button>
                </_actions>
              </_item>
            </_step>
          )}
        </_feed>
      )}
    </_home>
  );
};

export default Dashboard;
