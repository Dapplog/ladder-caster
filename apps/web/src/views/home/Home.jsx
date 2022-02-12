import React from 'react';
import { _home, _button } from './Home.styled';
import { PRIVATE_HOME } from 'core/routes/routes';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <_home>
      <_button to={PRIVATE_HOME}>{t('preview.demo')}</_button>
    </_home>
  );
};

export default Home;
