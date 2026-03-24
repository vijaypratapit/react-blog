/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_message: "Welcome",
      },
    },
    fr: {
      translation: {
        welcome_message: "Bienvenue",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});
