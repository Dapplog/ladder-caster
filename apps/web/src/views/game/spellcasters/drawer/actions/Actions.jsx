import React from 'react';
import {
  _actions,
  _item,
  _name,
  _wrapper,
  _action,
  _button,
  _description,
} from './Actions.styled';
import { IconMap } from 'design/icons/map.icon';
import { useTranslation } from 'react-i18next';
import { AnimateButton } from '../../../../../shared/button/animations/AnimateButton';
import { IconMove } from 'design/icons/move.icon';
import { IconBook } from 'design/icons/book.icon';
import { IconAnvil } from 'design/icons/anvil.icon';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  ACTION_CRAFT,
  ACTION_MOVE,
  ACTION_SPELL,
  ACTION_VIEW,
} from 'core/remix/state';
import { useActions } from '../../../../../../actions';

const Actions = ({ caster }) => {
  const { t } = useTranslation();
  const { modalMove, modalSpell, modalCraft } = useActions();

  return (
    <_actions>
      <_item onClick={() => modalMove(caster)}>
        <_wrapper>
          <_name>Move</_name>
          <_description>
            <p>{t('action.move')}</p>
          </_description>
        </_wrapper>
        <_action>
          <AnimateButton high>
            <_button>
              <IconMove />
            </_button>
          </AnimateButton>
        </_action>
      </_item>
      <_item onClick={() => modalSpell(caster)}>
        <_wrapper>
          <_name>Use Spell</_name>
          <_description>
            <p>{t('action.spell')}</p>
          </_description>
        </_wrapper>
        <_action>
          <AnimateButton high>
            <_button>
              <IconBook />
            </_button>
          </AnimateButton>
        </_action>
      </_item>
      <_item onClick={() => modalCraft(caster)}>
        <_wrapper>
          <_name>Craft Item</_name>
          <_description>
            <p>{t('action.craft')}</p>
          </_description>
        </_wrapper>
        <_action>
          <AnimateButton high>
            <_button>
              <IconAnvil />
            </_button>
          </AnimateButton>
        </_action>
      </_item>
    </_actions>
  );
};

export default Actions;
