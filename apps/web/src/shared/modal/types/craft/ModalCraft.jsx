import React, { useRef } from 'react';
import { _craft } from './ModalCraft.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { _board, _move } from '../move/ModalMove.styled';

const ModalCraft = ({ height, options }) => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const button_ref = useRef();

  useClickOutside(button_ref, () => modalClear({}));

  return (
    <_craft $height={height}>
      <_board ref={button_ref}></_board>
    </_craft>
  );
};

export default ModalCraft;
