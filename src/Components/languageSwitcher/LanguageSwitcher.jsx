import React, { useState } from 'react';
import './LanguageSwitcher.css'; 

function LanguageSwitcher({ onChangeLanguage }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    onChangeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <button
        className={currentLanguage === 'en' ? 'active' : ''}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button
        className={currentLanguage === 'ru' ? 'active' : ''}
        onClick={() => handleLanguageChange('ru')}
      >
        Русский
      </button>
    </div>
  );
}

export default LanguageSwitcher;