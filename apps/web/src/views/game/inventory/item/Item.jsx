import React, { useRef } from 'react';
import { _item, _float, _background } from './Item.styled';
import { useSize } from 'core/hooks/useSize';
import NFT from 'web/src/shared/nft/NFT';
import { useRemix } from 'core/hooks/remix/useRemix';
import { DRAWER_ACTIVE } from 'core/remix/state';

const Item = ({ info, equipped }) => {
  const item_ref = useRef();
  const { height } = useSize(item_ref);
  const [drawer, setDrawer] = useRemix(DRAWER_ACTIVE);

  return (
    <_item ref={item_ref} onClick={() => setDrawer(info)}>
      <_float>
        <_background
          $equipped={equipped}
          $height={height}
          $rarity={info?.rarity}
        />
      </_float>
      <_float>
        <NFT height={height} type={info?.type} tier={info?.tier} />
      </_float>
    </_item>
  );
};

export default Item;
