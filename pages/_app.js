import React, { useState, createContext } from 'react';
import "styles/global.scss";
import "styles/header.scss";
import "styles/variable.scss";
import "styles/home.scss";
import "styles/pools.scss";
import "styles/contact.scss";
import MainLayout from "../views/layouts/MainLayout";
import messagesEn from 'config/locales/en.json';
import messagesDe from 'config/locales/de.json';

const Context = createContext();
function MyApp({ Component, pageProps }) {
  const menuMessages = {
    en: { ...messagesEn },
    de: { ...messagesDe },
    // fr: { ...messagesFr },
    // pt: { ...messagesPt },
  };

  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(menuMessages['en']);

  const switchLanguage = lang => {
    setLocale(lang);
    setMessages(menuMessages[lang]);
  };

  return (
    <Context.Provider value={{ locale, switchLanguage, messages }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Context.Provider>
  );
}

export default MyApp;