import React, { useRef, useMemo } from 'react';
import {
  _loot,
  _close,
  _success,
  _container,
  _chest,
  _chests,
} from './SuccessLoot.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  ITEM_CHEST,
  MODAL_ACTIVE,
  TYPE_EARTH,
  TYPE_FIRE,
  TYPE_WATER,
} from 'core/remix/state';
import NFT from '../../../nft/NFT';
import { IconFiree } from 'design/icons/firee.icon';
import { IconWater } from 'design/icons/water.icon';
import { IconEarth } from 'design/icons/earth.icon';
import { css } from 'styled-components';

const SuccessLoot = ({ height }) => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const [rewards] = useRemix(MODAL_ACTIVE, (modal) => modal?.rewards);
  const success_ref = useRef();

  const type = rewards?.type;
  const chests = rewards?.chests;
  const num_chests = chests?.length;

  const resource_reward = useMemo(() => {
    const ResourceIcon = {
      [TYPE_FIRE]: IconFiree,
      [TYPE_WATER]: IconWater,
      [TYPE_EARTH]: IconEarth,
    }[type];

    // return (
    //   // <_resources>
    //   //   {!!ResourceIcon && <ResourceIcon/>}
    //   //   <_number ref={number_ref}></_number>
    //   // </_resources>
    // )
  }, [rewards]);

  const chest_reward = useMemo(() => {
    const chests_list = [];
    if (num_chests) {
      for (let i = 0; i < num_chests; i++) {
        chests_list.push(
          <_chest>
            <NFT type={ITEM_CHEST} tier={chests?.[i]?.tier} />
          </_chest>,
        );
      }
    }

    return chests_list;
  }, [rewards]);

  useClickOutside(success_ref, () => modalClear({}));

  return (
    <_loot ref={success_ref} $height={height} onClick={() => modalClear()}>
      <_container>{num_chests && <_chests>{chest_reward}</_chests>}</_container>
      <_close>
        <span>{t('success.move.close')}</span>
      </_close>
    </_loot>
  );
};

export default SuccessLoot;
