
import React, { useState } from 'react';
import { ASSETS } from '../constants';

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'help',
      title: 'Get Help',
      links: ['Help Center', 'Track Order', 'Shipping Info', 'Returns', 'Contact Us']
    },
    {
      id: 'company',
      title: 'Company',
      links: ['Careers', 'About', 'Stores', 'Want to Collab?']
    },
    {
      id: 'links',
      title: 'Quick Links',
      links: ['Size Guide', 'Sitemap', 'Gift Cards', 'Check Gift Card Balance']
    },
    {
      id: 'legal',
      title: 'Legal',
      links: ['Promo T&Cs', 'Privacy Policy', 'Terms of Service', 'CA Supply Chains Act']
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <footer className="bg-black text-white pt-10 md:pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-4">
        
        {/* Main Footer Grid Layout Adjusted */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 mb-16">
          
          {/* Column 1: App Download (Space but less than Col 4) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-left">Shop Faster With The App</h4>
            <div className="flex flex-row items-center gap-3 lg:gap-4 justify-start">
              <a href="#" className="w-28 md:w-32 hover:opacity-80 transition-opacity">
                <img src={ASSETS.APP_STORE} alt="Download on App Store" className="w-full h-auto" />
              </a>
              <a href="#" className="w-28 md:w-32 hover:opacity-80 transition-opacity">
                <img src={ASSETS.GOOGLE_PLAY} alt="Get it on Google Play" className="w-full h-auto" />
              </a>
            </div>
          </div>

          {/* Desktop Only Nav Columns: Slim (Col 2 & 3) */}
          <div className="hidden lg:block lg:col-span-1.5">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8">{sections[0].title}</h4>
            <ul className="space-y-4">
              {sections[0].links.map(link => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden lg:block lg:col-span-1.5">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8">{sections[1].title}</h4>
            <ul className="space-y-4">
              {sections[1].links.map(link => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4">{sections[2].title}</h4>
              <ul className="space-y-4">
                {sections[2].links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Accordions */}
          <div className="lg:hidden flex flex-col w-full">
            {sections.map(section => (
              <div key={section.id} className="border-b border-zinc-800">
                <button 
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-5"
                >
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em]">{section.title}</h4>
                  <span className="text-sm text-gray-500">
                    {openSection === section.id ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                  </span>
                </button>
                <ul className={`space-y-4 pb-6 ${openSection === section.id ? 'block' : 'hidden'}`}>
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-gray-400">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Last Column: Sign Up (Most space) */}
          <div className="lg:col-span-6 flex flex-col">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8">Sign Up For Discounts + Updates</h4>
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder="Phone Number or Email" 
                className="w-full bg-white text-black px-5 py-3.5 pr-14 focus:outline-none rounded-sm font-medium"
              />
              <button className="absolute right-1 top-1 bottom-1 w-11 flex items-center justify-center bg-gray-100 text-black hover:bg-black hover:text-white transition-colors">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed mb-10">
              By signing up for email, you agree to Fashion Nova's <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
              <br/><br/>
              By submitting your phone number, you agree to receive recurring automated marketing messages. Consent is not a condition of purchase. Reply STOP to cancel.
            </p>
            
            <div className="flex items-center gap-7">
              {['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map(icon => (
                <a key={icon} href="#" className="text-xl text-gray-400 hover:text-white transition-colors">
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom Area */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-gray-500 w-full text-left md:w-auto font-medium">
            © 2026 Fashion Nova, LLC All Rights Reserved
          </p>
          
          <div className="hidden lg:flex flex-wrap items-center gap-6 text-[11px] text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Promo T&Cs</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">CA Supply Chains Act</a>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
              Your privacy choices 
              <span className="bg-[#0052ff] h-4 w-7 rounded-full flex items-center justify-center text-[7px] text-white font-black">
                <i className="fa-solid fa-check mr-0.5"></i>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
