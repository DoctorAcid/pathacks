import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: [
      "de",
      "en",
      "es",
      "fr",
      "he",
      "id",
      "it",
      "nl",
      "pt",
      "ru",
      "sv",
      "zh",
    ],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    ssr: true,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
