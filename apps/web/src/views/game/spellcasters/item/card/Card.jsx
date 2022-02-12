import React from 'react';
import { _card, _icon } from './Card.styled';
import { useTranslation } from 'react-i18next';
import { IconHat } from 'design/icons/hat.icon';
import { AnimateButton } from '../../../../../shared/button/animations/AnimateButton';
import { useRemix } from 'core/hooks/remix/useRemix';
import { GAME_SPELLCASTERS } from 'core/remix/state';
import { find } from 'lodash';
import Spotlight from '../../../../../shared/spotlight/Spotlight';
import { IconWizard } from 'design/icons/wizard.icon';

const Card = ({ spell_id }) => {
  const { t } = useTranslation();
  const [caster] = useRemix(GAME_SPELLCASTERS, (spellcasters) =>
    find(spellcasters, (caster) => caster.id === spell_id),
  );

  return (
    <AnimateButton low>
      <_card>
        <Spotlight>
          <_icon>{caster?.position ? <IconWizard /> : <IconHat />}</_icon>
        </Spotlight>
      </_card>
    </AnimateButton>
  );
};

export default Card;
