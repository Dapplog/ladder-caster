import React, { useRef } from 'react';
import {
  _loot,
  _visuals,
  _actions,
  _button,
  _description,
  _limit,
} from './ModalLoot.styled';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { AnimateButton } from '../../../../views/game/nav/animations/AnimateButton';
import { useTranslation } from 'react-i18next';
import { AnimateLimit } from '../../animations/AnimateLimit';
import { MODAL_ACTIVE } from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';

const ModalLoot = ({ height, options }) => {
  const { t } = useTranslation();
  const { modalClear, actionLoot } = useActions();
  const button_ref = useRef();

  useClickOutside(button_ref, () => modalClear({}));

  return (
    <_loot $height={height}>
      <_visuals></_visuals>
      <_actions>
        <AnimateButton key={'button-modal-loot'}>
          <_button
            key={'button-modal-looter'}
            ref={button_ref}
            onClick={() => actionLoot(options?.caster)}
          >
            {t('modal.loot.action')}
          </_button>
        </AnimateButton>
        <AnimateLimit>
          <_limit>{t('modal.limit')}</_limit>
        </AnimateLimit>
      </_actions>
    </_loot>
  );
};

export default ModalLoot;
