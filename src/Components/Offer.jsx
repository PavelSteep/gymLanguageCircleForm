import React from "react";
import { useLanguage } from "../LanguageContext";

function Offer() {
  const { currentLanguage } = useLanguage();

  return (
    <div id="offer">
      <div className="offer-info">
        <h2>
          {currentLanguage === 'en' ? 'A big' : 'Большое'}
            <span>
              {currentLanguage === 'en' ? 'offer' : 'предложение'}
            </span> {currentLanguage === 'en' ? 'for this summer' : 'на это лето'}</h2>
        <p className="details">
          {currentLanguage === 'en' 
          ? 'Build your body and fitness with professional touch' 
          : 'Улучшите свое тело и физическую форму с помощью профессионального подхода'}
        </p>
        <div className="offer-btn">
          <a href="#offer">{currentLanguage === 'en' ? 'Join now' : 'Присоединяйся сейчас'}</a>
        </div>
      </div>
    </div>
  );
}

export default Offer;