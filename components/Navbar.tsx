
import React from 'react';
import { ASSETS } from '../constants';

const Navbar: React.FC = () => {
  const mainCategories = ['WOMEN', 'PLUS+CURVE', 'MEN', 'KIDS', 'BEAUTY'];
  const subCategories = [
    'NEW IN', 'CLOTHING', 'NOVADEALS', 'SALE', 'FORMAL SHOP', 
    'DRESSES', 'MATCHING SETS', 'TOPS', 'JEANS', 'JACKETS', 
    'SWEATERS', 'SHOES', 'BOTTOMS', 'JUMPSUITS', 'LINGERIE'
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 h-full">
          <a href="/" className="shrink-0">
            <img src={ASSETS.LOGO} alt="Fashion Nova" className="h-6 md:h-7" />
          </a>
          
          <div className="hidden lg:flex items-center h-full gap-6">
            {mainCategories.map((cat, idx) => (
              <a 
                key={cat} 
                href="#" 
                className={`text-[13px] font-bold tracking-wider relative h-full flex items-center group ${idx === 0 ? 'text-black' : 'text-gray-500 hover:text-black'}`}
              >
                {cat}
                {idx === 0 && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>}
              </a>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-gray-300 transition-all">
          <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2"></i>
          <input 
            type="text" 
            placeholder="Search within Women's Clothing" 
            className="bg-transparent w-full text-sm outline-none"
          />
          <button className="ml-2 text-gray-500 hover:text-black">
            <i className="fa-solid fa-camera"></i>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <span className="hidden sm:inline text-xs font-bold text-gray-600">NG</span>
          <button className="text-xl text-gray-800 hover:text-black transition-colors">
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <button className="text-xl text-gray-800 hover:text-black transition-colors">
            <i className="fa-regular fa-user"></i>
          </button>
          <button className="text-xl text-gray-800 hover:text-black transition-colors relative">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="text-xl text-gray-800 hover:text-black transition-colors">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>

      {/* Sub Nav */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-[1600px] mx-auto flex items-center overflow-x-auto no-scrollbar whitespace-nowrap px-4 py-3">
          {subCategories.map((cat, idx) => (
            <a 
              key={cat} 
              href="#" 
              className={`text-[11px] font-bold tracking-widest px-3 hover:underline underline-offset-4 ${cat === 'SALE' ? 'text-red-600' : 'text-gray-800'}`}
            >
              {cat}
            </a>
          ))}
          <div className="ml-auto pl-4 text-gray-400">
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </div>
        </div>
      </div>

      {/* Free Shipping Promo Bar */}
      <div className="bg-black text-white text-center py-3 text-[12px] font-bold tracking-widest relative">
        <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between">
          <span>FREE 1-DAY SHIPPING ON ORDERS OVER $100</span>
          <a href="#" className="hidden sm:flex items-center gap-1 hover:underline">
            SHOP NOW <i className="fa-solid fa-chevron-right text-[8px]"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
