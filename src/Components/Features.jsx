import React from "react";
import Feature from "./Feature";
import fimg1 from '../img/feature1.svg';
import fimg2 from '../img/feature2.svg';
import fimg3 from '../img/feature3.svg';
import fimg4 from '../img/feature4.svg';
import { useLanguage } from "../LanguageContext";

function Features() {
  const { currentLanguage } = useLanguage();

  return (
    <div id="features">
      <h2>{currentLanguage === 'en' ? 'Features' : 'Функции'}</h2>
      <div className="feature-blocks">
        <Feature img= { fimg1 } title={currentLanguage === 'en' ? 'WeightLifting' : 'Гиревой спорт'} />
        <Feature img= { fimg2 } title={currentLanguage === 'en' ? 'Specific Muscle' : 'Конкретная мышца'} />
        <Feature img= { fimg3 } title={currentLanguage === 'en' ? 'Flex Your Muscle' : 'Напрягите мышцы'} />
        <Feature img= { fimg4 } title={currentLanguage === 'en' ? 'Cardio Exercise' : 'Кардио упражнения'} />
      </div>
    </div>
  );
}

export default Features;