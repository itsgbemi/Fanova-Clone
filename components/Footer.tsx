
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
    <footer className="bg-black text-white pt-8 md:pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-4">
        
        {/* Newsletter - Mobile Top */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          
          <div className="lg:col-span-2 lg:order-last">
            {/* Social Icons - Top of mobile footer area */}
            <div className="mb-6 flex items-center gap-6 justify-center lg:justify-start">
              {['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map(icon => (
                <a key={icon} href="#" className="text-xl text-gray-400 hover:text-white transition-colors">
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-center lg:text-start">Sign Up For Discounts + Updates</h4>
            <div className="relative group max-w-md mx-auto lg:mx-0">
              <input 
                type="text" 
                placeholder="Phone Number or Email" 
                className="w-full bg-white text-black px-4 py-3 pr-12 focus:outline-none rounded-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <p className="mt-6 text-[10px] text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-start">
              By signing up for email, you agree to Fashion Nova's <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              <br/><br/>
              By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders). Consent is not a condition of purchase.
            </p>
          </div>

          {/* App Download area */}
          <div className="lg:col-span-1 lg:order-first">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-center lg:text-start">Shop Faster With The App</h4>
            <div className="flex flex-row items-center gap-3 justify-center lg:justify-start grayscale opacity-50 hover:opacity-100 transition-opacity">
              <a href="#" className="w-24 md:w-28">
                <img src={ASSETS.APP_STORE} alt="Download on App Store" className="w-full h-auto block" />
              </a>
              <a href="#" className="w-24 md:w-28">
                <img src={ASSETS.GOOGLE_PLAY} alt="Get it on Google Play" className="w-full h-auto block" />
              </a>
            </div>
          </div>

          {/* Nav Links - Mobile Accordion */}
          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
            {sections.map(section => (
              <div key={section.id} className="border-b border-zinc-800 lg:border-none">
                <button 
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-4 lg:py-0 lg:cursor-default"
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest lg:mb-6">{section.title}</h4>
                  <span className="lg:hidden text-lg text-gray-400">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500">
            © 2026 Fashion Nova, LLC All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-gray-500">
            <a href="#" className="hover:text-white">Your privacy choices <span className="bg-blue-600 px-1 rounded-full text-[8px] text-white">✓X</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
