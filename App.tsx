
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
      
      <main>
        {/* Removed Secondary Promo Header to eliminate white space before Hero */}
        <Hero />

        {/* Trend Report Section */}
        <section className="max-w-[1600px] mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase mb-8">Trend Report</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRENDS.map((item, idx) => (
              <a key={idx} href={item.link} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Keep titles as they are descriptions for the link */}
                <h3 className="text-base font-bold flex items-center gap-2">
                  {item.title} <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Large Promos - Overlays removed */}
        <div className="space-y-4 mb-16">
          <div className="relative w-full overflow-hidden cursor-pointer group">
            <img src={ASSETS.PROMO_70} alt="Promo Banner" className="w-full h-auto block" />
            <div className="absolute bottom-4 right-4 text-[10px] text-white/60">PRICES AS MARKED. T&CS APPLY</div>
          </div>

          <div className="relative w-full overflow-hidden cursor-pointer">
            <img src={ASSETS.PROMO_WINTER} alt="Promo Banner" className="w-full h-auto block" />
          </div>
        </div>

        {/* Shop By Brand - Overlays removed */}
        <section className="max-w-[1600px] mx-auto px-4 py-16 bg-white">
          <h2 className="text-2xl font-black uppercase mb-8">Shop By Brand</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRANDS.map((brand, idx) => (
              <a key={idx} href="#" className="relative overflow-hidden group cursor-pointer">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Shop By Category - Fixed grid and removed overlays */}
        <section className="max-w-[1600px] mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase mb-8">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Matching Sets - First large item */}
            <div className="relative group cursor-pointer overflow-hidden">
              <img src={SHOP_CATEGORIES[0].image} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" alt="" />
            </div>
            
            {/* Other categories */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SHOP_CATEGORIES.slice(1).map((cat, idx) => (
                <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-sm">
                  <img src={cat.image} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" alt="" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop The Latest */}
        <section className="max-w-[1600px] mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase mb-8">Shop The Latest</h2>
          
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-12">
            {DUMMY_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {DUMMY_PRODUCTS.map(product => (
              <ProductCard key={`${product.id}-copy`} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-12 py-4 bg-white border-2 border-black text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
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
