import React, { useRef } from 'react';
import { _move, _close, _success } from './SuccessMove.styled';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { useTranslation } from 'react-i18next';

const SuccessMove = ({ height, options }) => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const caster = options?.caster;
  const success_ref = useRef();

  useClickOutside(success_ref, () => modalClear({}));

  return (
    <_move ref={success_ref} $height={height} onClick={() => modalClear()}>
      <_success>
        <span>{t('success.title')}</span>
      </_success>
      <_close>
        <span>{t('success.move.close')}</span>
      </_close>
    </_move>
  );
};

export default SuccessMove;
