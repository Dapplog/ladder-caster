import i18n from 'i18next';
import en from './en.json';
import fr from './fr.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  caches: ['localStorage'],
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

i18n.use(LanguageDetector).init({
  caches: ['localStorage', 'cookie'],
});

export default i18n;
