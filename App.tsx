
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import PromoPopup from './components/PromoPopup';
import Footer from './components/Footer';
import { ASSETS, TRENDS, BRANDS, SHOP_CATEGORIES, DUMMY_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFilter, setActiveFilter] = useState('For You');

  useEffect(() => {
    const handleScroll = () => {
      const dismissed = localStorage.getItem('promo_dismissed');
      if (!dismissed && window.scrollY > 400) {
        setShowPopup(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('promo_dismissed', 'true');
  };

  const filters = ['For You', 'New In', 'Sale', 'Dresses', 'Jeans', 'Sets'];

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to Top Arrow */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 bg-white border border-gray-300 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>

      {showPopup && <PromoPopup onClose={handleClosePopup} />}

      <Navbar />
      
      <main className="flex flex-col">
        <Hero />

        {/* TREND REPORT Section */}
        <section className="max-w-[1600px] mx-auto px-4 pt-8 pb-4 w-full">
          <h2 className="text-xl md:text-2xl font-black uppercase mb-6 tracking-tight">TREND REPORT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-8">
            {TRENDS.map((item, idx) => (
              <a key={idx} href={item.link} className="group cursor-pointer">
                <div className="overflow-hidden mb-2 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xs md:text-base font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Promo Banner 1 - No whitespace */}
        <div className="w-full overflow-hidden leading-[0]">
           <picture>
             <source media="(max-width: 768px)" srcSet={ASSETS.PROMO_70_MOBILE} />
             <img src={ASSETS.PROMO_70} alt="Promo" className="w-full h-auto block" />
           </picture>
        </div>

        {/* Shop By Brand */}
        <section className="max-w-[1600px] mx-auto px-4 pt-8 pb-4 w-full">
          <h2 className="text-xl md:text-2xl font-black uppercase mb-6 tracking-tight">Shop By Brand</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {BRANDS.map((brand, idx) => (
              <a key={idx} href="#" className="relative overflow-hidden group cursor-pointer leading-[0]">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Next Two Promo Banners */}
        <div className="w-full overflow-hidden leading-[0]">
           <picture>
             <source media="(max-width: 768px)" srcSet={ASSETS.PROMO_WINTER_MOBILE} />
             <img src={ASSETS.PROMO_WINTER} alt="Promo" className="w-full h-auto block" />
           </picture>
        </div>
        <div className="w-full overflow-hidden leading-[0]">
           <picture>
             <source media="(max-width: 768px)" srcSet={ASSETS.PROMO_LAST_MOBILE} />
             <img src={ASSETS.PROMO_LAST} alt="Promo" className="w-full h-auto block" />
           </picture>
        </div>

        {/* SHOP BY CATEGORY Section */}
        <section className="max-w-[1600px] mx-auto px-4 pt-8 pb-4 w-full">
          <h2 className="text-xl md:text-2xl font-black uppercase mb-6 tracking-tight">SHOP BY CATEGORY</h2>
          
          {/* Grouped Layout: Desktop has specific grid, Mobile stacks based on category count */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {SHOP_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                className={`relative group cursor-pointer overflow-hidden leading-[0] ${idx === 0 ? 'col-span-2 md:col-span-1 row-span-1 md:row-span-2' : ''}`}
              >
                <img 
                  src={cat.image} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                  alt={cat.title} 
                />
                {/* Text close to bottom overlay */}
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                  <span className="text-white text-[11px] md:text-sm font-bold bg-black/40 backdrop-blur-sm px-3 py-1 uppercase tracking-widest leading-normal inline-block">
                    {cat.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop The Latest */}
        <section className="max-w-[1600px] mx-auto px-4 pt-8 pb-16 w-full">
          <h2 className="text-xl md:text-2xl font-black uppercase mb-6 tracking-tight">Shop The Latest</h2>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-bold transition-all border ${
                  activeFilter === f 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-800 border-gray-200 hover:border-black'
                }`}
              >
                {f === 'For You' && <i className="fa-solid fa-sparkles mr-2 text-yellow-500"></i>}
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-3 md:gap-x-4 gap-y-10 md:gap-y-12">
            {DUMMY_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {DUMMY_PRODUCTS.map(product => (
              <ProductCard key={`${product.id}-copy`} product={product} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <button className="px-10 py-3 md:px-12 md:py-4 bg-white border-2 border-black text-black font-black uppercase tracking-widest text-xs md:text-sm hover:bg-black hover:text-white transition-all">
              Load More
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
