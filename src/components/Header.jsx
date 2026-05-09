import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.get_involved'), path: '/get-involved' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.donate'), path: '/donate' }
  ];

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1">
              <img src="/logo.png" alt="Project Dignity Hobbs Logo" className="h-12 w-auto object-contain bg-white rounded-full p-1" />
              <span className="font-bold text-xl tracking-wide">Project Dignity</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-white hover:text-accent font-medium px-3 py-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-charcoal hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="font-semibold uppercase">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary pb-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-charcoal hover:text-accent block px-3 py-3 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-charcoal text-white px-4 py-3 rounded-md mt-4 w-full justify-center"
            >
              <Globe size={18} />
              <span className="font-semibold">{i18n.language === 'en' ? 'Español' : 'English'}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
