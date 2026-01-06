
import React from 'react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img 
        src={ASSETS.HERO} 
        alt="Hero Promotion" 
        className="w-full h-auto block"
      />
      {/* Text overlays removed as they are part of the image */}
      <div className="absolute bottom-4 left-4 text-[10px] text-white/70 font-medium">
        *T&CS APPLY
      </div>
    </div>
  );
};

export default Hero;
