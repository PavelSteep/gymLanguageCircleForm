import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const menuTranslations = {
  en: {
    header: 'Header',
    features: 'Features',
    offer: 'Offer',
    about: 'About',
    contact: 'Contact',
  },
  ru: {
    header: 'Заголовок',
    features: 'Особенности',
    offer: 'Предложение',
    about: 'О нас',
    contact: 'Контакт',
  },
};

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, menuTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}