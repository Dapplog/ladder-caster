import React from 'react';
import {
  _buy,
  _title,
  _options,
  _option,
  _button,
  _estimate,
  _or,
} from './Buy.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../../actions';
import { AnimateButton } from '../../../../../shared/button/animations/AnimateButton';

const Buy = () => {
  const { t } = useTranslation();
  const { modalBuyLADA } = useActions();

  return (
    <_buy>
      <_title>{t('buy.now')}</_title>
      <_options>
        <_option>
          <AnimateButton low>
            <_button onClick={() => modalBuyLADA()}>
              {t('spellcasters.buy')}
            </_button>
          </AnimateButton>
          <_estimate>
            <span>{t('buy.lada')}</span>
          </_estimate>
        </_option>
      </_options>
    </_buy>
  );
};

export default Buy;
