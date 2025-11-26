import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Permet de charger les fichiers JSON via HTTP
  .use(initReactI18next)
  .init({
    // IMPORTANT : On définit les namespaces disponibles
    ns: ['common', 'hero', 'intro', 'region', 'regioncard', 'cta', "activities", "auberge", "contact", "locations", "reservation"], 
     // Nous allons utiliser 'common' par défaut

    lng: 'fr', 
    fallbackLng: 'fr', 

    backend: {
      // Chemin où le Backend va chercher les fichiers JSON
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
    
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;