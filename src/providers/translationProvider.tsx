"use client";
import i18n from "i18next";
import React from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import EN from "../../public/translations/en/index.json";
import ES from "../../public/translations/es/index.json";

interface Props {
  children: React.ReactNode;
}

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  resources: {
    en: {
      translation: EN,
    },
    es: {
      translation: ES,
    },
  },
});

const TranslationProvider: React.FC<Props> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
