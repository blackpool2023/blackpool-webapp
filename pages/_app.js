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
import CookieConsent from "react-cookie-consent";
import { Link } from '@mui/material';

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
      <CookieConsent
        buttonStyle={{ background: "#615CFD", fontSize: "15px", color: 'white' }}
        buttonText="AKZEPTIEREN"
        declineButtonText="NECNOTWENDIGE"
        enableDeclineButton
      >
        Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben.

        {/* Diese Website verwendet Cookies für Analyse, Personalisierung und Werbung. Wenn Sie unsere Website weiterhin nutzen, stimmen Sie unserer <Link href='/privacypolicy' className='color-white' style={{ textDecoration: 'underline' }} >DATENSCHUTZ.</Link> . AKZEPTIEREN. */}

        {/* This website uses cookies for analytics, personalization, and advertising. If you continue to use our website, you consent to our  <Link href='/privacypolicy' className='color-white' style={{ textDecoration: 'underline' }} >Cookies Policy.</Link> ACCEPT. */}
      </CookieConsent>

    </Context.Provider>
  );
}

export default MyApp;