import React, { useRef, useMemo, useEffect } from 'react';
import {
  _ladder,
  _header,
  _title,
  _map,
  _row,
  _level,
  _portals,
  _indent,
  _pace,
  _filters,
  _shadow,
  _gradient,
  _list,
} from './Map.styled';
import { useSize } from 'core/hooks/useSize';
import { useTranslation } from 'react-i18next';
import { TicksInstance } from '../../../../App';
import { useRemix } from 'core/hooks/remix/useRemix';
import { DEMO_MODE, GAME_MAP } from 'core/remix/state';
import { reverse } from 'lodash';
import Tile from './tile/Tile';
import { _wallet } from '../inventory/Inventory.styled';
import { IconWallet } from 'design/icons/wallet.icon';
import { CHAIN_LOCAL_WALLET } from 'chain/hooks/state';

const Map = () => {
  const { t } = useTranslation();
  const [map] = useRemix(GAME_MAP);
  const [demo] = useRemix(DEMO_MODE);
  const map_ref = useRef();
  const list_ref = useRef();
  const bottom_ref = useRef();
  const [wallet] = useRemix(CHAIN_LOCAL_WALLET);
  const publicKey = wallet?.publicKey?.toString();
  const short_public = `...${publicKey?.substring(
    publicKey?.length - 6,
    publicKey?.length,
  )}`;
  const { height } = useSize(list_ref);

  useEffect(() => {
    if (list_ref) {
      list_ref.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight });
      });
    }
  }, [list_ref]);

  const render_map = useMemo(() => {
    if (map)
      return reverse(
        map?.map((data) => {
          const level = data.level;

          return (
            <_row key={data.id}>
              <_level>
                <_indent />
                <span>{level}</span>
              </_level>
              <_portals>
                <Tile level={level} col={'a'} />
                <Tile level={level} col={'b'} />
                <Tile level={level} col={'c'} />
              </_portals>
              <_pace>
                <span>{level}</span>
                <_indent $disabled $right />
              </_pace>
            </_row>
          );
        }),
      );
  }, [map?.length]);

  return (
    <_ladder>
      <_header>
        <_title>
          <span>{t('title.map')}</span>
          {demo?.active && (
            <_wallet>
              <span>{short_public}</span>
              <IconWallet />
            </_wallet>
          )}
        </_title>
        {TicksInstance}
      </_header>
      <_filters></_filters>
      <_map ref={map_ref}>
        <_shadow>
          <_gradient $height={height} />
        </_shadow>
        <_list ref={list_ref}>{render_map}</_list>
      </_map>
    </_ladder>
  );
};

export default Map;
