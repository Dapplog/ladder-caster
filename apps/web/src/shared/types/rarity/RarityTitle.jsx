import React from 'react';
import {
  RARITY_COMMON,
  RARITY_EPIC,
  RARITY_LEGENDARY,
  RARITY_RARE,
} from 'core/remix/state';
import { useTranslation } from 'react-i18next';

const RarityTitle = ({ rarity }) => {
  const { t } = useTranslation();

  return (
    {
      [RARITY_COMMON]: t('rarity.name.common'),
      [RARITY_RARE]: t('rarity.name.rare'),
      [RARITY_EPIC]: t('rarity.name.epic'),
      [RARITY_LEGENDARY]: t('rarity.name.legendary'),
    }[rarity]?.toUpperCase() || null
  );
};

export default RarityTitle;
