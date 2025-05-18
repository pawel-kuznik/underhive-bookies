import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import plTranslations from './locales/pl.json';
import deTranslations from './locales/de.json';
import nlTranslations from './locales/nl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      pl: {
        translation: plTranslations,
      },
      de: {
        translation: deTranslations,
      },
      nl: {
        translation: nlTranslations,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 