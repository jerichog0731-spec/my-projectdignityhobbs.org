import React from 'react';
import { useTranslation } from 'react-i18next';
import NewsletterSignup from './NewsletterSignup';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partner Logos */}
        <div className="mb-16 border-b border-gray-700 pb-12">
          <h3 className="text-center font-bold text-gray-400 uppercase tracking-widest mb-8">{t('footer.partners_title')}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Using text placeholders instead of actual images for now since we don't have partner logos, or we can use small SVG placeholders */}
            <div className="text-2xl font-black font-serif">City of Hobbs</div>
            <div className="text-2xl font-black">Hobbs Foundation</div>
            <div className="text-2xl font-black italic">NM United</div>
            <div className="text-2xl font-black tracking-widest">FOOD BANK</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Project Dignity Hobbs Logo" className="h-10 w-auto object-contain bg-white rounded-full p-1" />
              <span className="font-bold text-xl tracking-wide">Project Dignity</span>
            </div>
            <p className="text-gray-300 text-sm max-w-sm">
              Empowering marginalized voices, fostering sustainable local development, and building a more equitable future for everyone in Hobbs.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none">
                  {t('footer.email')}
                </a>
              </li>
              <li>Hobbs, NM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">{t('nav.newsletter')}</h3>
            <NewsletterSignup />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>{t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
            <a href="/privacy" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none">Privacy Policy</a>
            <a href="/accessibility" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none">Accessibility Statement</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
