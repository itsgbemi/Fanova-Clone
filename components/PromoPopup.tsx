
import React from 'react';
import { ASSETS } from '../constants';

interface PromoPopupProps {
  onClose: () => void;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ onClose }) => {
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
          
          <p className="text-sm font-black tracking-widest mb-4 uppercase">Project Disclaimer</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase leading-tight">Clone Portfolio Project</h2>
          
          <div className="text-gray-600 space-y-4 text-sm leading-relaxed mb-8">
            <p>
              This website is a highly-fidelity <strong>Clone/Portfolio Project</strong> designed to demonstrate UI/UX development skills. It is not affiliated with, endorsed by, or connected to Fashion Nova, LLC.
            </p>
            <p className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              Are you impressed with this build and looking to create a world-class e-commerce store or digital experience?
            </p>
          </div>

          <div className="w-full space-y-4">
            <a 
              href="mailto:hi@gbemisolaoyeniyi.com"
              className="block w-full bg-black text-white py-4 font-black text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors text-center"
            >
              Contact Me: hi@gbemisolaoyeniyi.com
            </a>
            <button 
              onClick={onClose}
              className="text-xs font-black underline decoration-2 underline-offset-4 uppercase cursor-pointer block mx-auto pt-2"
            >
              Continue Exploring
            </button>
          </div>

          <p className="mt-8 text-[9px] text-gray-400 leading-tight italic">
            Developed by Gbemisola Oyeniyi. All brands and trademarks are property of their respective owners.
          </p>
        </div>

        {/* Image Side */}
        <div className="hidden md:block w-1/2 relative">
          <img 
            src={ASSETS.POPUP_IMG} 
            alt="Fashion Clone" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
