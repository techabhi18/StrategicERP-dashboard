import React, { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../locales/en.json";
import hiMessages from "../locales/hi.json";
import spMessages from "../locales/sp.json";

const messages = {
  en: enMessages,
  hi: hiMessages,
  sp: spMessages,
};

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");
  const switchLanguage = (lang) => {
    setLocale(lang);
  };

  const handleIntlError = (err) => {
    if (err.code === "MISSING_TRANSLATION") {
      return;
    }
    console.error(err);
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        onError={handleIntlError}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
