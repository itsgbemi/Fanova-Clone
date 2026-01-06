
import React from 'react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-[0]">
      <picture>
        <source media="(max-width: 768px)" srcSet={ASSETS.HERO_MOBILE} />
        <img 
          src={ASSETS.HERO} 
          alt="Hero Promotion" 
          className="w-full h-auto block"
        />
      </picture>
      <div className="absolute bottom-4 left-4 text-[10px] text-white/70 font-medium leading-normal">
        *T&CS APPLY
      </div>
    </div>
  );
};

export default Hero;
