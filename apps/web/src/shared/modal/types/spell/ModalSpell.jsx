import React, { useRef } from 'react';
import { _spell } from './ModalSpell.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { _close, _success } from '../../success/move/SuccessMove.styled';

const ModalSpell = ({ height, options }) => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const button_ref = useRef();

  useClickOutside(button_ref, () => modalClear({}));

  return (
    <_spell ref={button_ref} $height={height} onClick={() => modalClear()}>
      <_success>
        <span>{t('coming.soon')}</span>
      </_success>
      <_close>
        <span>{t('success.move.close')}</span>
      </_close>
    </_spell>
  );
};

export default ModalSpell;
