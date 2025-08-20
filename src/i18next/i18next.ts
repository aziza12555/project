import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import ru from "../locales/ru.json";
import uz from "../locales/uz.json";
import zh from "../locales/zh.json";
import tr from "../locales/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
    zh: { translation: zh },
    tr: { translation: tr },
  },
  lng: "en", // default til
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
