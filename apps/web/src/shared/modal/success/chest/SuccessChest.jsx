import React, { useRef } from 'react';
import { _chest } from './SuccessChest.styled';
import { _close, _success } from '../move/SuccessMove.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';

const SuccessChest = ({ height, options }) => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const caster = options?.caster;
  const success_ref = useRef();

  useClickOutside(success_ref, () => modalClear({}));

  return (
    <_chest ref={success_ref} $height={height} onClick={() => modalClear()}>
      <_success>
        <span>{t('success.title')}</span>
      </_success>
      <_close>
        <span>{t('success.move.close')}</span>
      </_close>
    </_chest>
  );
};

export default SuccessChest;
