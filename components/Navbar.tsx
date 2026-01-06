
import React, { useState } from 'react';
import { ASSETS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainCategories = ['WOMEN', 'PLUS+CURVE', 'MEN', 'KIDS', 'BEAUTY'];
  const subCategories = [
    { name: 'New In', color: 'text-black' },
    { name: 'Clothing', color: 'text-black' },
    { name: 'Novadeals', color: 'text-black' },
    { name: 'Sale', color: 'text-red-600' },
    { name: 'Formal Shop', color: 'text-black' },
    { name: 'Dresses', color: 'text-black' },
    { name: 'Matching Sets', color: 'text-black' },
    { name: 'Tops', color: 'text-black' },
    { name: 'Jeans', color: 'text-black' },
    { name: 'Sweaters', color: 'text-black' },
    { name: 'Shoes', color: 'text-black' },
    { name: 'Bottoms', color: 'text-black' },
    { name: 'Jumpsuits', color: 'text-black' },
    { name: 'Lingerie & Sleep', color: 'text-black' },
    { name: 'Accessories', color: 'text-black' },
    { name: 'Loungewear', color: 'text-black' },
    { name: 'Nova Luxe', color: 'text-black' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        {/* Top Bar */}
        <div className="max-w-[1600px] mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-8 h-full">
            <a href="/" className="shrink-0">
              <img src={ASSETS.LOGO} alt="Fashion Nova" className="h-4 md:h-7" />
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

          {/* Desktop Search */}
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
          <div className="flex items-center gap-4 md:gap-5">
            {/* Desktop only Search Icon */}
            <button className="hidden md:block text-xl text-gray-800 hover:text-black transition-colors">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            
            {/* Icons as requested: Profile, Wishlist, Cart, Menu */}
            <button className="text-[22px] text-gray-800 hover:text-black transition-colors">
              <i className="fa-regular fa-user"></i>
            </button>
            <button className="text-[22px] text-gray-800 hover:text-black transition-colors">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="text-[22px] text-gray-800 hover:text-black transition-colors relative">
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-[22px] text-gray-800 hover:text-black transition-colors"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block border-t border-gray-100 bg-white">
          <div className="max-w-[1600px] mx-auto flex items-center overflow-x-auto no-scrollbar whitespace-nowrap px-4 py-3">
            {mainCategories.map((cat, idx) => (
              <a 
                key={cat} 
                href="#" 
                className={`text-[11px] font-bold tracking-widest px-3 hover:underline underline-offset-4 ${cat === 'SALE' ? 'text-red-600' : 'text-gray-800'}`}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Free Shipping Promo Bar */}
        <div className="bg-black text-white text-center py-2 md:py-3 text-[10px] md:text-[12px] font-bold tracking-widest relative">
          <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between">
            <span>FREE 1-DAY SHIPPING ON ORDERS OVER $100</span>
            <a href="#" className="hidden sm:flex items-center gap-1 hover:underline">
              SHOP NOW <i className="fa-solid fa-chevron-right text-[8px]"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100">
          <img src={ASSETS.LOGO} alt="Fashion Nova" className="h-4" />
          <div className="flex items-center gap-4">
            <button className="text-xl"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="text-xl"><i className="fa-solid fa-clock-rotate-left"></i></button>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl"><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
          {mainCategories.map((cat, idx) => (
            <button 
              key={cat}
              className={`flex-none px-4 py-3 text-[11px] font-bold tracking-widest whitespace-nowrap ${idx === 0 ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(100vh-100px)]">
          {/* Promo Banner inside menu */}
          <div className="bg-black text-white py-4 px-8 text-center text-[13px] font-bold leading-tight">
            Buy One, Get One FREE Dresses, Sets & Jumpsuits! Use Code: <span className="bg-red-700 px-1">FREE</span>
          </div>

          {/* List items */}
          <div className="flex flex-col">
            {subCategories.map((item, idx) => (
              <a 
                key={idx} 
                href="#" 
                className={`flex items-center justify-between px-4 py-4 border-b border-gray-50 text-[14px] font-bold tracking-tight ${item.color}`}
              >
                {item.name}
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
              </a>
            ))}
          </div>

          {/* Location / Bottom links */}
          <div className="bg-gray-50 p-4 pb-20">
             <div className="text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-widest">Location Settings</div>
             <button className="flex items-center justify-between w-full p-4 bg-white rounded-sm border border-gray-100">
               <div className="flex items-center gap-3">
                 <i className="fa-solid fa-dollar-sign text-gray-400 border border-gray-400 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"></i>
                 <span className="text-sm font-bold">Region/Currency</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-sm text-gray-500">Nigeria NGN ₦</span>
                 <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
               </div>
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
