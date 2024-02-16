import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./translations/pt";
import en from "./translations/en";

const resources = {
  en,
  pt,
};

let defaultLang = localStorage.getItem("@alanaDev:language");

if (!defaultLang) {
  defaultLang = "pt";
}

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
