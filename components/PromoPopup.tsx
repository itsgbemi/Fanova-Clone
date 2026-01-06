
import React, { useState } from 'react';
import { ASSETS } from '../constants';

interface PromoPopupProps {
  onClose: () => void;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ onClose }) => {
  const [selectedPref, setSelectedPref] = useState('Women');
  const prefs = ['Women', 'Men', 'Curve', 'Kids', 'Beauty'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="relative bg-white max-w-4xl w-full flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-2xl text-gray-800 hover:text-black transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Content Side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <img src={ASSETS.LOGO} alt="Fashion Nova" className="h-8 mb-8" />
          
          <p className="text-sm font-bold tracking-widest mb-2">GET YOUR ENTIRE ORDER FOR</p>
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase leading-none">Extra 10% OFF</h2>
          <p className="text-gray-600 mb-8">Just enter your email address</p>

          <div className="w-full mb-6">
            <p className="text-xs font-bold uppercase mb-3">Choose your preferences:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {prefs.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPref(p)}
                  className={`px-4 py-1.5 border rounded-full text-sm font-medium transition-all ${
                    selectedPref === p 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-800 border-gray-300 hover:border-black'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full space-y-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black"
            />
            <div className="flex items-start text-left gap-3">
              <input type="checkbox" className="mt-1 accent-black" defaultChecked />
              <p className="text-[10px] leading-tight text-gray-500">
                Yes! Sign me up to receive Email Notifications from Fashion Nova with the latest deals, sales and updates. I agree to Fashion Nova's <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
            <button className="w-full bg-black text-white py-4 font-bold text-lg uppercase tracking-wider hover:bg-zinc-800 transition-colors">
              Get My Offer
            </button>
            <button 
              onClick={onClose}
              className="text-sm font-bold underline decoration-2 underline-offset-4 uppercase cursor-pointer block mx-auto pt-2"
            >
              I Will Pay Full Price
            </button>
          </div>

          <p className="mt-8 text-[9px] text-gray-400 leading-tight">
            *Offer can only be redeemed by new subscribers. By signing up, you agree to receive recurring marketing emails from Fashion Nova at the email address used when signing up. Consent is not a condition of any purchase. <span className="underline cursor-pointer">Terms and Conditions</span>
          </p>
        </div>

        {/* Image Side */}
        <div className="hidden md:block w-1/2 relative">
          <img 
            src={ASSETS.POPUP_IMG} 
            alt="Promotion" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
