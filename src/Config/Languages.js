export const supportedLocales = {
  en: {
    name: "English",
    translationFileLoader: () => require("../lang/en.json"),
    momentLocaleLoader: () => Promise.resolve(),
  },
  ar: {
    name: "عربي",
    translationFileLoader: () => require("../lang/ar.json"),
    momentLocaleLoader: () => import("moment/locale/ar"),
  },
};

export const defaultNamespace = "common";

export const namespaces = [
  "common",
  "general",
  "lists",
  "menu",
  "Home",
  "Contact",
  "DatePickerAndroid",
];
