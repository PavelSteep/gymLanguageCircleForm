import React from 'react';
import { useLanguage } from '../LanguageContext';

function Header() {
  const { currentLanguage } = useLanguage(); // Получите текущий язык из контекста

  return (
    <header id="main">
      <div className="header-content">
      <p>{currentLanguage === 'en' ? 'Step up your' : 'Поднимите свой'}</p>
        <h1>
          <span>
            {currentLanguage === 'en' ? 'Fitness' : 'Фитнес'}
          </span> {currentLanguage === 'en' ? 'with us' : 'с нами'}
        </h1>
        <p className="details">
        {currentLanguage === 'en'
            ? 'Build your body and fitness with a professional touch'
            : 'Сформируйте свое тело и фитнес с профессиональным подходом'}
        </p>
        <div className="header-btn">
          <a href="#join">{currentLanguage === 'en' ? 'Join us' : 'Присоединяйтесь к нам'}</a>
        </div>
      </div>
    </header>
  );
}

export default Header;