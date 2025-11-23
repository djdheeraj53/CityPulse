import React, { createContext, useState } from "react";
import { I18nManager } from "react-native";
import i18n from "../i18n";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const switchLanguage = () => {
    const newLang = locale === "en" ? "ar" : "en";
    setLocale(newLang);

    i18n.locale = newLang;
    I18nManager.forceRTL(newLang === "ar");
  };

  const t = (key) => i18n.t(key);

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage, t }}>
      {children}
    </LocaleContext.Provider>
  );
};
