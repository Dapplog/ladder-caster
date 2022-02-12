import React from 'react';
import { TIER_I, TIER_II, TIER_III, TIER_IV } from 'core/remix/state';

const TierItem = ({ tier }) => {
  return (
    {
      [TIER_I]: 'I',
      [TIER_II]: 'II',
      [TIER_III]: 'III',
      [TIER_IV]: 'IV',
    }[tier] || null
  );
};

export default TierItem;
