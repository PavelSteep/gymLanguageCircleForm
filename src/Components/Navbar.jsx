import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-scroll';
import { useLanguage } from '../LanguageContext';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { currentLanguage, setCurrentLanguage, menuTranslations  } = useLanguage();

  const changeBackground = () => {
    window.scrollY >= 50 ? setNav(true) : setNav(false);
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    // Очистка слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const indicatorStyles = {
    left: '10px',
    opacity: nav ? 1 : 0, // Изменяем прозрачность индикатора в зависимости от прокрутки
    transition: 'top 0.3s',
    top: `${scrollPosition}px`, // Изменяем положение индикатора в зависимости от прокрутки
  };

  return (
    <nav className={ nav ? "nav active" : "nav" } >
      <div className="scroll-indicator" style={indicatorStyles}></div>
      <Link to="main" className="logo" >
        <img src={ logo } alt='logo' />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000}>
            {menuTranslations[currentLanguage].header}
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1000}>
            {menuTranslations[currentLanguage].features}
          </Link>
        </li>
        <li>
          <Link to="offer" smooth={true} duration={1000}>
            {menuTranslations[currentLanguage].offer}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            {menuTranslations[currentLanguage].about}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            {menuTranslations[currentLanguage].contact}
          </Link>
        </li>
      </ul>
      <div className="language-switcher">
        <button
          className={currentLanguage === 'en' ? 'active' : ''}
          onClick={() => setCurrentLanguage('en')}
        >
          English
        </button>
        <button
          className={currentLanguage === 'ru' ? 'active' : ''}
          onClick={() => setCurrentLanguage('ru')}
        >
          Русский
        </button>
      </div>
    </nav>
  );
}

export default Navbar;