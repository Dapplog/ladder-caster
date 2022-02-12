import React, { useRef, useMemo } from 'react';
import {
  _modal,
  _float,
  _fade,
  _area,
  _center,
  _container,
} from './Modal.styled';
import {
  MODAL_ACTIVE,
  MODAL_CHEST,
  MODAL_MINT,
  MODAL_CRAFT,
  MODAL_LOOT,
  MODAL_MOVE,
  MODAL_SPELL,
  MODAL_SUCCESS,
} from 'core/remix/state';

import { useRemix } from 'core/hooks/remix/useRemix';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../actions';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { AnimateFade } from './animations/AnimateFade';
import Particles from '../particles/Particles';
import { AnimatePresence } from 'framer-motion';
import { AnimateParticles } from './animations/AnimateParticles';
import ModalMint from './types/mint/ModalMint';
import ModalMove from './types/move/ModalMove';
import ModalSpell from './types/spell/ModalSpell';
import ModalLoot from './types/loot/ModalLoot';
import ModalCraft from './types/craft/ModalCraft';
import ModalChest from './types/chest/ModalChest';
import SuccessMint from './success/mint/SuccessMint';
import SuccessMove from './success/move/SuccessMove';
import SuccessChest from './success/chest/SuccessChest';
import SuccessCraft from './success/craft/SuccessCraft';
import SuccessLoot from './success/loot/SuccessLoot';
import SuccessSpell from './success/spell/SuccessSpell';

const Modal = ({ screen_height }) => {
  const { t } = useTranslation();
  const { modalClear } = useActions();
  const [modal] = useRemix(MODAL_ACTIVE);
  const modal_ref = useRef();
  const success_ref = useRef();
  const options = modal?.options;
  const isSuccess = modal?.success;
  const active = modal?.active && !isSuccess;

  const Canvas = {
    [MODAL_MINT]: Particles,
    [MODAL_MOVE]: Particles,
    [MODAL_SPELL]: Particles,
    [MODAL_LOOT]: Particles,
    [MODAL_CRAFT]: Particles,
    [MODAL_CHEST]: Particles,
  }[modal?.type];

  const ModalSwitch = {
    [MODAL_MINT]: ModalMint,
    [MODAL_MOVE]: ModalMove,
    [MODAL_SPELL]: ModalSpell,
    [MODAL_LOOT]: ModalLoot,
    [MODAL_CRAFT]: ModalCraft,
    [MODAL_CHEST]: ModalChest,
  }[modal?.type];

  const Success = {
    [MODAL_MINT]: SuccessMint,
    [MODAL_MOVE]: SuccessMove,
    [MODAL_SPELL]: SuccessSpell,
    [MODAL_LOOT]: SuccessLoot,
    [MODAL_CRAFT]: SuccessCraft,
    [MODAL_CHEST]: SuccessChest,
  }[modal?.type];

  return (
    <_modal>
      <AnimatePresence>
        {(active || isSuccess) && (
          <AnimateFade key={'modal-fade'}>
            <_float>
              <_fade $height={screen_height} onClick={() => modalClear()} />
            </_float>
          </AnimateFade>
        )}
        {(active || isSuccess) && (
          <AnimateParticles key={'modal-canvas'}>
            <_float>{!!Canvas && <Canvas height={screen_height} />}</_float>
          </AnimateParticles>
        )}
        {active && !isSuccess && (
          <_container key={'modal-container'} $height={screen_height}>
            <_center>
              <_area ref={modal_ref}>
                {!!ModalSwitch && (
                  <ModalSwitch options={options} height={screen_height} />
                )}
              </_area>
            </_center>
          </_container>
        )}
        {isSuccess && (
          <_container key={'modal-success'} $height={screen_height}>
            <_center>
              <_area ref={success_ref}>
                {!!Success && (
                  <Success options={options} height={screen_height} />
                )}
              </_area>
            </_center>
          </_container>
        )}
      </AnimatePresence>
    </_modal>
  );
};

export default Modal;
