import React, { useState, useEffect } from 'react';
import { _nft } from './NFT.styled';
import {
  ITEM_BOOK,
  ITEM_HAT,
  ITEM_ROBE,
  ITEM_STAFF,
  ITEM_CHEST,
  TIER_I,
  TIER_II,
  TIER_III,
  TIER_IV,
} from 'core/remix/state';

const NFT = ({ height, type, tier }) => {
  const [image, setImage] = useState();

  const src = {
    [ITEM_HAT]: {
      [TIER_I]: require('../../../../libs/design/assets/Hat2.png'),
      [TIER_II]: require('../../../../libs/design/assets/Hat2.png'),
      [TIER_III]: require('../../../../libs/design/assets/Hat2.png'),
      [TIER_IV]: require('../../../../libs/design/assets/Hat2.png'),
    },
    [ITEM_ROBE]: {
      [TIER_I]: require('../../../../libs/design/assets/Robe2.png'),
      [TIER_II]: require('../../../../libs/design/assets/Robe2.png'),
      [TIER_III]: require('../../../../libs/design/assets/Robe2.png'),
      [TIER_IV]: require('../../../../libs/design/assets/Robe2.png'),
    },
    [ITEM_BOOK]: {
      [TIER_I]: require('../../../../libs/design/assets/Spellbook1.png'),
      [TIER_II]: require('../../../../libs/design/assets/Spellbook1.png'),
      [TIER_III]: require('../../../../libs/design/assets/Spellbook1.png'),
      [TIER_IV]: require('../../../../libs/design/assets/Spellbook1.png'),
    },
    [ITEM_STAFF]: {
      [TIER_I]: require('../../../../libs/design/assets/Staff2.png'),
      [TIER_II]: require('../../../../libs/design/assets/Staff2.png'),
      [TIER_III]: require('../../../../libs/design/assets/Staff2.png'),
      [TIER_IV]: require('../../../../libs/design/assets/Staff2.png'),
    },
    [ITEM_CHEST]: {
      [TIER_I]: require('../../../../libs/design/assets/Chest1.png'),
      [TIER_II]: require('../../../../libs/design/assets/Chest1.png'),
      [TIER_III]: require('../../../../libs/design/assets/Chest1.png'),
      [TIER_IV]: require('../../../../libs/design/assets/Chest1.png'),
    },
  }[type]?.[tier];

  return <_nft src={src} alt={'NFT item'} $height={height} />;
};

export default NFT;
