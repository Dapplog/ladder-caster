import React from 'react';
import {
  _rank,
  _tier,
  _name,
  _mint,
  _level,
  _progress,
  _wrapper,
  _loading,
  _icon,
  _close,
  _current,
  _upcoming,
} from './Rank.styled';
import { useTranslation } from 'react-i18next';
import { useRemix } from 'core/hooks/remix/useRemix';
import { DRAWER_ACTIVE, GAME_SPELLCASTERS } from 'core/remix/state';
import Progress from './progress/Progress';
import { AnimateButton } from '../../../../../shared/button/animations/AnimateButton';
import { IconClose } from 'design/icons/close.icon';

const Rank = ({ spell_id }) => {
  const { t } = useTranslation();
  const [drawer, setDrawer] = useRemix(DRAWER_ACTIVE);
  const [spellcasters, setSpellcasters] = useRemix(GAME_SPELLCASTERS);

  return (
    <_rank>
      <_wrapper>
        <_tier>
          <_name>{}Wizard</_name>
          <_mint>{}#0529</_mint>
        </_tier>
      </_wrapper>
      <_wrapper $full>
        <_level>
          <_loading>
            <Progress />
          </_loading>
          <_progress>
            <_current>{}LEVEL 10</_current>
            <_upcoming>{}LEVEL 11</_upcoming>
          </_progress>
        </_level>
        <_close>
          <AnimateButton high>
            <_icon onClick={() => setDrawer('')}>
              <IconClose />
            </_icon>
          </AnimateButton>
        </_close>
      </_wrapper>
    </_rank>
  );
};

export default Rank;
