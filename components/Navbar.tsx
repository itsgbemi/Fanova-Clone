
import React, { useState, useRef, useEffect } from 'react';
import { ASSETS } from '../constants';

const Icons = {
  History: () => (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path fill="var(--neutral-900)" stroke="var(--neutral-900)" strokeWidth="0.25" d="M13 14.043c-.14 0-.28-.04-.38-.12l-3.3-2.2a.696.696 0 01-.32-.58v-4.4c0-.24.14-.48.34-.6.1-.06.22-.1.36-.1.12 0 .24.04.36.1.22.12.36.36.36.6v4.02l2.98 2c.16.1.26.26.3.44.04.18 0 .38-.1.52-.1.16-.26.26-.44.3-.06.02-.12.02-.16.02z" />
      <path fill="var(--neutral-900)" stroke="var(--neutral-900)" strokeWidth="0.25" d="M10 19.383c-2.16 0-4.26-.76-5.94-2.12a9.38 9.38 0 01-3.4-6.16c-.02-.22.06-.42.24-.56.1-.08.22-.12.36-.12.08 0 .16.02.24.04.2.08.34.26.36.48a8.24 8.24 0 002.6 5.06 8.142 8.142 0 005.26 2.14H10c1.86 0 3.68-.64 5.12-1.8a8.21 8.21 0 002.92-4.88c.36-1.92.02-3.9-.96-5.6a8.07 8.07 0 00-4.38-3.62c-.88-.3-1.78-.46-2.72-.46-1.02 0-2.02.18-2.96.56-1.82.74-3.34 2.08-4.26 3.8l-.16.3h2.84c.1 0 .22.02.34.1.18.12.28.3.28.5s-.1.38-.28.5c-.12.08-.24.1-.34.1H2.26c-.44 0-.86-.18-1.18-.48-.3-.32-.48-.74-.48-1.2v-3.18c0-.1.02-.22.1-.34.12-.18.3-.28.5-.28s.38.1.5.28c.08.12.1.24.1.34v2.6l.36-.56c.84-1.3 2.02-2.38 3.38-3.12A9.32 9.32 0 019.98.583H10c2.44 0 4.76.94 6.52 2.62a9.335 9.335 0 012.88 6.4 9.38 9.38 0 01-2.36 6.62 9.455 9.455 0 01-6.28 3.12c-.26.02-.5.04-.76.04z" />
    </svg>
  ),
  Wishlist: () => (
    <svg width="20" height="20" viewBox="0 -1 20 20" fill="none">
      <path d="M10 17.0303L2.01 8.69698C1.30778 7.99531 0.844297 7.09036 0.685296 6.11048C0.526296 5.13059 0.679843 4.12552 1.12416 3.23781V3.23781C1.45921 2.56791 1.94864 1.98721 2.55212 1.54355C3.1556 1.09989 3.85586 0.805976 4.59521 0.686021C5.33455 0.566065 6.09182 0.623503 6.80462 0.853601C7.51741 1.0837 8.16533 1.47987 8.695 2.00948L10 3.31364L11.305 2.00948C11.8347 1.47987 12.4826 1.0837 13.1954 0.853601C13.9082 0.623503 14.6654 0.566065 15.4048 0.686021C16.1441 0.805976 16.8444 1.09989 17.4479 1.54355C18.0514 1.98721 18.5408 2.56791 18.8758 3.23781C19.3195 4.12518 19.4728 5.12966 19.314 6.10898C19.1552 7.0883 18.6923 7.99284 17.9908 8.69448L10 17.0303Z" stroke="var(--neutral-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Profile: () => (
    <svg width="20" height="20" viewBox="-0.25 -0.25 20.5 20.5" fill="none">
      <path d="M6.66675 9.16683C6.66675 10.0509 7.01794 10.8987 7.64306 11.5239C8.26818 12.149 9.11603 12.5002 10.0001 12.5002C10.8841 12.5002 11.732 12.149 12.3571 11.5239C12.9822 10.8987 13.3334 10.0509 13.3334 9.16683C13.3334 8.28277 12.9822 7.43493 12.3571 6.80981C11.732 6.18469 10.8841 5.8335 10.0001 5.8335C9.11603 5.8335 8.26818 6.18469 7.64306 6.80981C7.01794 7.43493 6.66675 8.28277 6.66675 9.16683V9.16683Z" stroke="var(--neutral-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.7609 17.3968C15.0061 16.6372 14.1085 16.0344 13.1199 15.6231C12.1312 15.2118 11.0709 15 10.0001 15C8.92926 15 7.869 15.2118 6.88032 15.6231C5.89165 16.0344 4.99408 16.6372 4.23926 17.3968" stroke="var(--neutral-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.625 10C0.625 12.4864 1.61272 14.871 3.37087 16.6291C5.12903 18.3873 7.5136 19.375 10 19.375C12.4864 19.375 14.871 18.3873 16.6291 16.6291C18.3873 14.871 19.375 12.4864 19.375 10C19.375 7.5136 18.3873 5.12903 16.6291 3.37087C14.871 1.61272 12.4864 0.625 10 0.625C7.5136 0.625 5.12903 1.61272 3.37087 3.37087C1.61272 5.12903 0.625 7.5136 0.625 10V10Z" stroke="var(--neutral-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Cart: () => (
    <svg width="20" height="20" viewBox="-0.5 -0.5 20 20" fill="none">
      <path d="M9.45579 0.125C7.35112 0.125 5.63536 1.84076 5.63536 3.94543V5.1579H0.582495C0.330842 5.1579 0.125 5.36375 0.125 5.61539V13.5536C0.125 16.3218 2.38984 18.5865 5.1579 18.5865H13.5536C16.3218 18.5865 18.5865 16.3217 18.5865 13.5536V5.61539C18.5865 5.36374 18.3807 5.1579 18.129 5.1579H13.2535V3.94543C13.2763 1.81796 11.5605 0.125 9.45579 0.125ZM6.55039 3.92259C6.55039 2.32125 7.85445 1.0172 9.45579 1.0172C11.0571 1.0172 12.3612 2.32125 12.3612 3.92259V5.13506H6.55048L6.55039 3.92259ZM17.6943 6.07305V13.5538C17.6943 15.8186 15.8413 17.6716 13.5764 17.6716L5.15786 17.6714C2.89301 17.6714 1.04003 15.8184 1.04003 13.5536V6.07289H5.6354V9.11538H6.55039V6.07289H12.3382V9.11538H13.2532L13.2534 6.07289L17.6943 6.07305Z" fill="var(--neutral-900)" stroke="var(--neutral-900)" strokeWidth="0.5" />
    </svg>
  ),
  Search: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7.74344 3.61834C9.53014 2.86181 11.5295 2.7993 13.345 3.43182L13.7053 3.56756L13.7757 3.59978C14.1115 3.77737 14.2649 4.18442 14.1194 4.54412C13.9736 4.90385 13.5799 5.08978 13.2151 4.98357L13.1419 4.95818L12.8518 4.84881C11.3881 4.33875 9.77319 4.38842 8.3284 5.00018C6.78958 5.65181 5.58289 6.88573 4.95828 8.42596C4.33466 9.96421 4.34784 11.6994 5.00027 13.2404C5.6519 14.7792 6.88587 15.9859 8.42605 16.6105C9.96436 17.2342 11.6995 17.221 13.2405 16.5685C14.7795 15.9168 15.9861 14.6823 16.6106 13.1418C16.7663 12.7584 17.2036 12.5736 17.5872 12.7287C17.9708 12.8842 18.1564 13.3215 18.0012 13.7053C17.7014 14.4448 17.2914 15.1265 16.7923 15.7326L20.0091 18.9494C20.302 19.2423 20.302 19.717 20.0091 20.0099C19.7162 20.3028 19.2414 20.3028 18.9485 20.0099L15.7317 16.7931C15.1608 17.263 14.5211 17.6548 13.8255 17.9494C11.9195 18.7564 9.77128 18.7749 7.86258 18.0012C5.95635 17.2282 4.42625 15.7331 3.61844 13.8254C2.8115 11.9194 2.79388 9.77113 3.56765 7.86248C4.34058 5.95621 5.83566 4.42616 7.74344 3.61834ZM15.8841 4.10955C15.9941 4.10962 16.0887 4.18186 16.1214 4.28338L16.1321 4.3283C16.2663 5.38406 16.5543 6.16869 17.0393 6.72771C17.5207 7.28225 18.2222 7.6442 19.2454 7.80486C19.3669 7.82393 19.4572 7.92894 19.4573 8.05193C19.4573 8.17504 19.367 8.27992 19.2454 8.299C18.2222 8.45965 17.5207 8.82165 17.0393 9.37615C16.5542 9.93513 16.2663 10.7198 16.1321 11.7756C16.1162 11.9004 16.0099 11.9942 15.8841 11.9943C15.7583 11.9942 15.6519 11.9003 15.636 11.7756C15.5018 10.7198 15.2139 9.93513 14.7288 9.37615C14.2473 8.82159 13.5452 8.45959 12.5218 8.299C12.4005 8.27966 12.3108 8.17483 12.3108 8.05193C12.311 7.92912 12.4005 7.82416 12.5218 7.80486C13.6008 7.63554 14.3049 7.25103 14.7737 6.68865C15.2473 6.12041 15.5074 5.33981 15.636 4.3283C15.6519 4.2036 15.7584 4.1097 15.8841 4.10955ZM19.1253 10.1203C19.2631 10.1205 19.3752 10.2324 19.3753 10.3703V10.674H19.679C19.8169 10.6741 19.9289 10.7861 19.929 10.924C19.9289 11.0619 19.8169 11.1739 19.679 11.174H19.3753V11.4777C19.3752 11.6156 19.2632 11.7275 19.1253 11.7277C18.9874 11.7276 18.8753 11.6157 18.8753 11.4777V11.174H18.5716L18.5208 11.1691C18.407 11.1458 18.3217 11.0447 18.3216 10.924C18.3217 10.8033 18.407 10.7022 18.5208 10.6789L18.5716 10.674H18.8753V10.3703C18.8754 10.2324 18.9874 10.1205 19.1253 10.1203ZM19.4534 3.49432C19.5604 3.49443 19.6538 3.56251 19.6887 3.66033L19.6995 3.7033C19.7449 3.97898 19.8482 4.17944 19.9905 4.32049C20.1331 4.46174 20.3334 4.56138 20.6018 4.60564C20.7222 4.62568 20.8106 4.72969 20.8108 4.85174C20.8108 4.97401 20.7224 5.07877 20.6018 5.09881C20.3263 5.14424 20.1256 5.24659 19.9846 5.38885C19.8434 5.53149 19.7437 5.73176 19.6995 6.00018C19.6796 6.12085 19.5757 6.21001 19.4534 6.21014C19.3311 6.20999 19.2262 6.12084 19.2063 6.00018C19.1621 5.73181 19.0634 5.53147 18.9221 5.38885C18.7811 5.24656 18.5806 5.14423 18.305 5.09881C18.1844 5.07878 18.095 4.97402 18.095 4.85174C18.0952 4.72964 18.1845 4.62562 18.305 4.60564C18.5807 4.5602 18.7811 4.45703 18.9221 4.31463C19.0633 4.17195 19.1621 3.9717 19.2063 3.7033C19.2264 3.58289 19.3313 3.49446 19.4534 3.49432Z" fill="var(--neutral-500)" />
    </svg>
  ),
  Camera: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.7188 7.79563C21.4128 7.03043 20.6603 6.4948 19.7931 6.4948H16.5793C16.286 6.4948 16.0054 6.29075 15.9289 5.99743L15.8014 5.52556C15.5335 4.62008 14.6918 3.98242 13.7481 3.98242H10.2665C9.32274 3.98242 8.48103 4.62008 8.21321 5.52556L8.08568 5.98467C8.00916 6.26524 7.72859 6.48205 7.43527 6.48205H4.24697C3.09918 6.48205 2.1682 7.38752 2.11719 8.52256V18.9419C2.1682 20.0769 3.09918 20.9824 4.24697 20.9824H15.2785C15.6738 20.9824 16.0054 20.6508 16.0054 20.2555C16.0054 19.8601 15.6738 19.5286 15.2785 19.5286H4.25972C3.87713 19.5286 3.57105 19.2225 3.57105 18.8399V8.63734C3.57105 8.25474 3.87713 7.94866 4.25972 7.94866H7.43527C8.379 7.94866 9.22071 7.311 9.48853 6.40553L9.61606 5.94641C9.69258 5.66584 9.97315 5.46179 10.2665 5.46179H13.7481C14.0414 5.46179 14.322 5.66584 14.3985 5.94641L14.3985 5.94641L14.526 6.41828C14.7173 7.08145 15.2657 7.94866 16.1202 7.94866L19.1427 7.92316H19.7804C20.1502 7.92316 20.4435 8.21648 20.4435 8.57357V14.3635C20.4435 14.7589 20.7751 15.0904 21.1704 15.0904C21.5658 15.0904 21.8974 14.7589 21.8974 14.3635V8.63734C21.8974 8.34401 21.8336 8.05069 21.7188 7.79563Z" fill="var(--neutral-900)" />
      <path d="M12.0018 8.85547C9.65517 8.85547 7.74219 10.7684 7.74219 13.115C7.74219 15.4616 9.65517 17.3746 12.0018 17.3746C14.3483 17.3746 16.2613 15.4616 16.2613 13.115C16.2613 10.7684 14.3483 8.85547 12.0018 8.85547ZM12.0018 15.908C10.4586 15.908 9.2088 14.6454 9.2088 13.1023C9.2088 11.5591 10.4586 10.2966 12.0018 10.2966C13.5449 10.2966 14.7947 11.5591 14.7947 13.1023C14.7947 14.6454 13.5449 15.908 12.0018 15.908Z" fill="var(--neutral-900)" />
      <path d="M21.7062 17.3481C20.839 17.2078 20.2523 16.9017 19.8442 16.4426C19.4361 15.9708 19.1938 15.3076 19.079 14.4149V14.3766C19.0408 14.2873 18.9643 14.2363 18.875 14.2363C18.773 14.2363 18.6837 14.3128 18.6709 14.4149C18.5562 15.2693 18.3394 15.9325 17.944 16.4044C17.5487 16.8762 16.9493 17.2078 16.0438 17.3481C15.9418 17.3609 15.8652 17.4501 15.8652 17.5522C15.8652 17.6542 15.9418 17.7435 16.0438 17.7562C16.911 17.8965 17.4976 18.2026 17.9057 18.6617C18.3138 19.1336 18.5562 19.7967 18.6709 20.6894C18.6837 20.7915 18.773 20.868 18.875 20.868C18.977 20.868 19.0663 20.7915 19.079 20.6894C19.1938 19.7967 19.4361 19.1336 19.8442 18.6617C20.2523 18.1898 20.839 17.8837 21.7062 17.7562C21.8082 17.7435 21.8847 17.6542 21.8847 17.5522C21.8847 17.4501 21.8082 17.3609 21.7062 17.3481Z" fill="var(--neutral-900)" />
    </svg>
  ),
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const mainCategories = ['WOMEN', 'PLUS+CURVE', 'MEN', 'KIDS', 'BEAUTY'];
  const navItems = [
    'NEW IN', 'CLOTHING', 'NOVADEALS', 'SALE', 'FORMAL SHOP', 
    'DRESSES', 'MATCHING SETS', 'TOPS', 'JEANS', 'JACKETS', 
    'SWEATERS', 'SHOES', 'BOTTOMS', 'JUMPSUITS', 'LINGERIE & SLEEP', 
    'ACCESSORIES', 'LOUNGEWEAR', 'NOVA LUXE'
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        {/* Top Bar Desktop */}
        <div className="max-w-[1600px] mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8 h-full">
            <a href="/" className="shrink-0">
              <img src={ASSETS.LOGO} alt="Fashion Nova" className="h-4 md:h-6" />
            </a>
            
            <div className="hidden lg:flex items-center h-full gap-6">
              {mainCategories.map((cat, idx) => (
                <a 
                  key={cat} 
                  href="#" 
                  className={`text-[12px] font-black tracking-widest relative h-full flex items-center group transition-colors ${idx === 0 ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  {cat}
                  {idx === 0 && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></span>}
                </a>
              ))}
            </div>
          </div>

          {/* Search Section Desktop */}
          <div className="flex-1 max-w-[500px] hidden md:flex items-center gap-4">
            <div className="flex-1 flex items-center bg-transparent border border-[var(--fn-border)] rounded-full px-4 py-2 transition-all">
              <span className="flex items-center scale-90 opacity-60"><Icons.Search /></span>
              <input 
                type="text" 
                placeholder="Search within Women's Clothing" 
                className="bg-transparent w-full text-sm outline-none px-2 placeholder-gray-400"
              />
              <button className="opacity-60 hover:opacity-100 transition-opacity">
                <Icons.Camera />
              </button>
            </div>
            
            {/* NG Indicator */}
            <div className="flex items-center gap-1.5 cursor-pointer group">
              <span className="text-[11px] font-black tracking-widest text-gray-800">NG</span>
              <i className="fa-solid fa-chevron-down text-[8px] text-gray-400 group-hover:text-black"></i>
            </div>
          </div>

          {/* Icons in order: History (hide mobile), Profile, Wishlist, Cart, Menu (Menu only on mobile) */}
          <div className="flex items-center gap-4 md:gap-5">
            <button className="hidden md:block p-1 hover:scale-105 transition-transform"><Icons.History /></button>
            <button className="p-1 hover:scale-105 transition-transform"><Icons.Profile /></button>
            <button className="p-1 hover:scale-105 transition-transform"><Icons.Wishlist /></button>
            <button className="p-1 hover:scale-105 transition-transform relative"><Icons.Cart /></button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-1 text-[20px] text-gray-800"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Subheader - Nav items row above search */}
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex items-center overflow-x-auto no-scrollbar py-2.5 px-4 gap-6">
            {mainCategories.map((cat, idx) => (
              <a 
                key={cat} 
                href="#" 
                className={`text-[11px] font-black tracking-[0.15em] whitespace-nowrap transition-colors ${idx === 0 ? 'text-black border-b-2 border-black pb-0.5' : 'text-gray-400'}`}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-transparent border border-[var(--fn-border)] rounded-full px-4 py-2">
            <Icons.Search />
            <input 
              type="text" 
              placeholder="Search within Women's Clothing" 
              className="bg-transparent w-full text-sm outline-none px-2 placeholder-gray-400"
            />
            <Icons.Camera />
          </div>
        </div>

        {/* Navigation Category Row with Arrows (Desktop) */}
        <div className="hidden md:block border-t border-gray-100 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-4 relative flex items-center h-11">
            
            {/* Left Arrow - Hidden on default, shows at end */}
            {!showRightArrow && (
              <button 
                onClick={scrollLeft}
                className="absolute left-0 z-10 bg-white/90 p-2 text-gray-400 hover:text-black transition-colors"
              >
                <i className="fa-solid fa-chevron-left text-sm"></i>
              </button>
            )}

            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex items-center overflow-x-auto no-scrollbar whitespace-nowrap h-full gap-6 w-full"
            >
              {navItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className={`text-[10px] font-black tracking-widest hover:underline underline-offset-[10px] decoration-1 transition-colors ${item === 'SALE' ? 'text-red-600' : 'text-gray-900'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Arrow - Visible on default, hidden at end */}
            {showRightArrow && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 z-10 bg-white/90 p-2 text-gray-400 hover:text-black transition-colors"
              >
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>
            )}
          </div>
        </div>

        {/* Promotion Image Tab */}
        <div className="w-full">
          <img 
            src={ASSETS.PROMO_BANNER_IMG} 
            alt="Promotion" 
            className="w-full h-auto object-cover block"
          />
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100">
          <img src={ASSETS.LOGO} alt="Fashion Nova" className="h-4" />
          <div className="flex items-center gap-4">
            <button className="text-xl p-1"><Icons.Search /></button>
            {/* Hide history on mobile as requested */}
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl p-1 text-gray-500 hover:text-black">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
          {mainCategories.map((cat, idx) => (
            <button 
              key={cat}
              className={`flex-none px-4 py-4 text-[11px] font-black tracking-widest whitespace-nowrap ${idx === 0 ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto h-[calc(100vh-100px)] pb-10">
          <div className="bg-black text-white py-4 px-8 text-center text-[13px] font-black leading-tight uppercase tracking-tight">
            Buy One, Get One FREE Dresses, Sets & Jumpsuits! Use Code: <span className="bg-red-700 px-1">FREE</span>
          </div>
          <div className="flex flex-col">
            {navItems.map((name, idx) => (
              <a 
                key={idx} 
                href="#" 
                className={`flex items-center justify-between px-4 py-4 border-b border-gray-50 text-[13px] font-black tracking-tight ${name === 'SALE' ? 'text-red-600' : 'text-black'}`}
              >
                {name}
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
