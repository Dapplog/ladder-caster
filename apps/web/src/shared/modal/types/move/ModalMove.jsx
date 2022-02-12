import React, { useState, useRef } from 'react';
import {
  _move,
  _board,
  _row,
  _float,
  _actions,
  _header,
  _title,
  _description,
  _limit,
  _confirm,
} from './ModalMove.styled';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../actions';
import Tiles from './tiles/Tiles';
import Level from './level/Level';
import Letters from './letters/Letters';
import { AnimateBoard } from '../../animations/AnimateBoard';
import { AnimateLimit } from '../../animations/AnimateLimit';
import { _button } from '../loot/ModalLoot.styled';
import { AnimateButton } from '../../../../views/game/nav/animations/AnimateButton';
import { useRemix } from 'core/hooks/remix/useRemix';
import { CONFIRM_MOVE, GAME_CONFIRM } from 'core/remix/state';

const ModalMove = ({ height, options }) => {
  const action_ref = useRef();
  const button_ref = useRef();
  const confirm_ref = useRef();
  const { t } = useTranslation();
  const { modalClear, confirmMove, modalChest } = useActions();
  const [confirm] = useRemix(GAME_CONFIRM);

  const isConfirm = confirm && confirm?.type === CONFIRM_MOVE;
  useClickOutside(action_ref, () => modalClear({}));

  const caster = options?.caster;
  const level = +caster?.position?.[1];
  const next_level = level + 1 <= 30 ? level + 1 : null;

  return (
    <_move $height={height}>
      <_actions ref={action_ref}>
        <AnimateBoard>
          <_board ref={confirm_ref}>
            <_header>
              <_title>{t('modal.move.title')}</_title>
              <_description>{t('modal.move.description')}</_description>
            </_header>
            {next_level && (
              <_row>
                <Level level={next_level} />
                <Tiles level={next_level} position={caster?.position} />
                <Level level={next_level} $right />
              </_row>
            )}
            <_row>
              <Level level={level} />
              <Tiles level={level} position={caster?.position} />
              <Level level={level} $right />
            </_row>
            <_float>
              <Letters />
            </_float>
          </_board>
        </AnimateBoard>
        <_confirm>
          {isConfirm && (
            <>
              <AnimateButton $hidden={!confirm} key={'button-modal-move'}>
                <_button
                  disabled={!confirm}
                  key={'button-modal-mover'}
                  ref={button_ref}
                  onClick={() => confirmMove(caster)}
                >
                  {t('modal.move.action')} {confirm?.position?.toUpperCase()}
                </_button>
              </AnimateButton>
              <AnimateLimit $hidden={!confirm}>
                <_limit>
                  <span>{t('modal.limit')}</span>
                </_limit>
              </AnimateLimit>
            </>
          )}
        </_confirm>
      </_actions>
    </_move>
  );
};

export default ModalMove;
