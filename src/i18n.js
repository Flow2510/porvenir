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

import frPresentation from './locales/fr/frpresentation.json';
import esPresentation from './locales/es/espresentation.json';
import gbPresentation from './locales/gb/gbpresentation.json';

import frInfo from './locales/fr/frinfo.json';
import esInfo from './locales/es/esinfo.json';
import gbInfo from './locales/gb/gbinfo.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        header: frHeader,
        hero: frHero,
        stats: frStats,
        intro: frIntro,
        presentation: frPresentation,
        info: frInfo
      },
      gb: {
        header: gbHeader,
        hero: gbHero,
        stats: gbStats,
        intro: gbIntro,
        presentation: gbPresentation,
        info: gbInfo
      },
      es: {
        header: esHeader,
        hero: esHero,
        stats: esStats,
        intro: esIntro,
        presentation: esPresentation,
        info: esInfo
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