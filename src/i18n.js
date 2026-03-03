import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import frHeader from './locales/fr/frheader.json';
import esHeader from './locales/es/esheader.json';
import gbHeader from './locales/gb/gbheader.json';

import frHero from './locales/fr/frhero.json';
import esHero from './locales/es/eshero.json';
import gbHero from './locales/gb/gbhero.json';

import frStats from './locales/fr/frstats.json';
import esStats from './locales/es/esstats.json';
import gbStats from './locales/gb/gbstats.json';

import frIntro from './locales/fr/frintro.json';
import esIntro from './locales/es/esintro.json';
import gbIntro from './locales/gb/gbintro.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        header: frHeader,
        hero: frHero,
        stats: frStats,
        intro: frIntro
      },
      en: {
        header: gbHeader,
        hero: gbHero,
        stats: gbStats,
        intro: gbIntro
      },
      es: {
        header: esHeader,
        hero: esHero,
        stats: esStats,
        intro: esIntro
      }
    },
    lng: "fr",
    fallbackLng: "fr",
    ns: ["common"],          // namespace par défaut
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;