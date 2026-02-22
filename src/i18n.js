import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import frHeader from './locales/fr/frheader.json';
import esHeader from './locales/es/esheader.json';
import gbHeader from './locales/gb/gbheader.json';

import frHero from './locales/fr/frhero.json';
import esHero from './locales/es/eshero.json';
import gbHero from './locales/gb/gbhero.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        header: frHeader,
        hero: frHero,
      },
      en: {
        header: gbHeader,
        hero: gbHero,
      },
      es: {
        header: esHeader,
        hero: esHero,
      }
    },
    lng: "fr",
    fallbackLng: "en",
    ns: ["common"],          // namespace par défaut
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;