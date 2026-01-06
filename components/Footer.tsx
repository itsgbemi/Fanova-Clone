
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
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Updated grid for newsletter to take more space */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          
          {/* App Download - Styled side by side and greyed out */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Shop Faster With The App</h4>
            <div className="flex flex-row items-center gap-3 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <a href="#" className="w-24 md:w-28 transition-transform hover:scale-105">
                <img src={ASSETS.APP_STORE} alt="Download on App Store" className="w-full h-auto" />
              </a>
              <a href="#" className="w-24 md:w-28 transition-transform hover:scale-105">
                <img src={ASSETS.GOOGLE_PLAY} alt="Get it on Google Play" className="w-full h-auto" />
              </a>
            </div>
          </div>

          {/* Nav Links - Mobile Accordion */}
          {sections.map(section => (
            <div key={section.id} className="lg:col-span-1 border-b border-zinc-800 lg:border-none">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 lg:py-0 lg:cursor-default"
              >
                <h4 className="text-xs font-bold uppercase tracking-widest lg:mb-6">{section.title}</h4>
                <span className="lg:hidden text-lg">
                  {openSection === section.id ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                </span>
              </button>
              
              <ul className={`space-y-4 pb-6 lg:pb-0 lg:block ${openSection === section.id ? 'block' : 'hidden'}`}>
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter - Taking more space (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Sign Up For Discounts + Updates</h4>
            <div className="relative group max-w-md">
              <input 
                type="text" 
                placeholder="Phone Number or Email" 
                className="w-full bg-white text-black px-4 py-3 pr-12 focus:outline-none rounded-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <p className="mt-6 text-[10px] text-gray-500 leading-relaxed max-w-md">
              By signing up for email, you agree to Fashion Nova's <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              <br/><br/>
              By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Fashion Nova. Consent is not a condition of purchase. Msg & data rates may apply.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              {['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map(icon => (
                <a key={icon} href="#" className="text-xl text-gray-400 hover:text-white transition-colors">
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500">
            © 2026 Fashion Nova, LLC All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-gray-500">
            <a href="#" className="hover:text-white">Promo T&Cs</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">CA Supply Chains Act</a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              Your privacy choices 
              <span className="inline-block bg-blue-600 px-1 rounded-full text-[8px] text-white">✓X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
