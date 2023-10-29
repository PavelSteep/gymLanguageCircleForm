import React from 'react';
import aboutImg from '../img/about.png';
import { useLanguage } from "../LanguageContext";

function About() {
  const { currentLanguage } = useLanguage();

  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImg} alt="about" />
      </div>
      <div className="about-text">
        <h1>{currentLanguage === 'en' ? 'LeARN MORE ABOUT US' : 'УЗНАТЬ БОЛЬШЕ О НАС'}</h1>
        <p>
          {currentLanguage === 'en' 
          ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laudantium magni? Vel accusantium libero commodi, explicabo ab ullam distinctio nostrum, excepturi sed in quasi veniam!' 
          : 'Сама истина, за болью вскоре следует адиписизация элиты. Следует ли полагать, что великие хвалители? Или обвинители свободного интереса, я объясню с любого нашего различия, кроме как если бы я пришел !'}
        </p>
        <button>{currentLanguage === 'en' ? 'READ MORE' : 'ЧИТАТЬ ДАЛЕЕ'}</button>
      </div>
    </div>
  )
}

export default About;