import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import frHome from './locales/fr/frhome.json'
import esHome from './locales/es/eshome.json'
import gbHome from './locales/gb/gbhome.json'

import frHeader from './locales/fr/frheader.json';
import esHeader from './locales/es/esheader.json';
import gbHeader from './locales/gb/gbheader.json';

import frFooter from './locales/fr/frfooter.json';
import esFooter from './locales/es/esfooter.json';
import gbFooter from './locales/gb/gbfooter.json';

import frAbout from './locales/fr/frabout.json';
import esAbout from './locales/es/esabout.json';
import gbAbout from './locales/gb/gbabout.json';

import frReservation from './locales/fr/frreservation.json';
import esReservation from './locales/es/esreservation.json';
import gbReservation from './locales/gb/gbreservation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        home: frHome,
        header: frHeader,
        about: frAbout,
        reservation: frReservation,
        footer: frFooter
      },
      gb: {
        home: gbHome,
        header: gbHeader,
        about: gbAbout,
        reservation: gbReservation,
        footer: gbFooter
      },
      es: {
        home: esHome,
        header: esHeader,
        about: esAbout,
        reservation: esReservation,
        footer: esFooter
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