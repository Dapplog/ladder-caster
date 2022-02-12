import React, { useRef } from 'react';
import {
  _accept,
  _actions,
  _deny,
  _description,
  _title,
  _window,
} from '../../Modal.styled';
import { _breakpoint } from '../../../../views/game/spellcasters/drawer/Player.styled';
import { AnimateButton } from '../../../button/animations/AnimateButton';
import { AnimateModal } from '../../animations/AnimateModal';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { useActions } from '../../../../../actions';
import { useRemix } from 'core/hooks/remix/useRemix';
import { MODAL_ACTIVE } from 'core/remix/state';
import { useTranslation } from 'react-i18next';

const ModalMint = () => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const [modal] = useRemix(MODAL_ACTIVE);
  const button_ref = useRef();

  useClickOutside(button_ref, () => modalClear({}));

  const active = modal?.active;

  const description = modal?.description;
  const accept = () => {
    if (active && modal?.accept) modal?.accept();
    modalClear();
  };
  const deny = () => {
    if (active && modal?.accept) modal?.deny();
  };

  return (
    <AnimateModal>
      <_window ref={button_ref}>
        <_title>{t('modal.confirm')}</_title>
        <_breakpoint />
        <_description>{description}</_description>
        <_actions>
          <_deny onClick={() => deny()}>{t('modal.no')}</_deny>
          <AnimateButton high>
            <_accept onClick={() => accept()}>{t('modal.yes')}</_accept>
          </AnimateButton>
        </_actions>
      </_window>
    </AnimateModal>
  );
};

export default ModalMint;
