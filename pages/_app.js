import React, { useState, createContext } from 'react';
import "pages/assets/scss/global.scss";
import "pages/assets/scss/header.scss";
import "pages/assets/scss/variable.scss";
import "pages/assets/scss/home.scss";
import MainLayout from "pages/layouts/MainLayout";
import messagesEn from 'pages/helpers/locales/en.json';
import messagesDe from 'pages/helpers/locales/de.json';

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