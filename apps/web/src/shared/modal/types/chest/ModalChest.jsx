import React, { useRef } from 'react';
import { _chest, _confirm } from './ModalChest.styled';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { AnimateButton } from '../../../../views/game/nav/animations/AnimateButton';
import { _button } from '../loot/ModalLoot.styled';
import {
  CONFIRM_CHEST,
  GAME_CONFIRM,
  GAME_INVENTORY,
  MODAL_CHEST,
} from 'core/remix/state';
import { useRemix } from 'core/hooks/remix/useRemix';

const ModalChest = () => {
  const { t } = useTranslation();
  const { modalClear, confirmChest } = useActions();
  const button_ref = useRef();
  const [inventory] = useRemix(GAME_INVENTORY);
  const [confirm] = useRemix(GAME_CONFIRM);
  const first_chest = inventory?.chests?.[0];

  useClickOutside(button_ref, () => modalClear({}));

  return (
    <_chest>
      <_confirm>
        <AnimateButton $hidden={!confirm} key={'button-modal-chest'}>
          <_button
            disabled={!confirm}
            key={'button-modal-chest'}
            ref={button_ref}
            onClick={() => confirmChest(first_chest?.mint)}
          >
            {t('modal.chest.action')}
          </_button>
        </AnimateButton>
      </_confirm>
    </_chest>
  );
};

export default ModalChest;
