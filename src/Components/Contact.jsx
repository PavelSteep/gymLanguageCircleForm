import React from "react";
import { useLanguage } from '../LanguageContext';

function Contact() {
  const { currentLanguage } = useLanguage();

  return (
    <div id="contact">
      <h2>{currentLanguage === 'en' ? 'CONTACT US' : 'СВЯЗАТЬСЯ С НАМИ'}</h2>
      <form action="">
        <input type="text" placeholder={currentLanguage === 'en' ? 'Full Name' : 'Полное имя'} />
        <input type="text" placeholder={currentLanguage === 'en' ? 'Type your E-Mail' : 'Введите свой адрес электронной почты'} />
        <textarea placeholder={currentLanguage === 'en' ? 'Fwrite Here...itness' : 'Пишите здесь'}></textarea>
        <input type="submit" value={currentLanguage === 'en' ? 'send' : 'отправлять'} />
      </form>
    </div>
  );
}

export default Contact;