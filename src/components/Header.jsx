import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();

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
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1">
          <img src="/logo.png" alt="Project Dignity Hobbs Logo" className="max-h-12 w-auto object-contain bg-white rounded-full p-1" />
          <span className="hidden min-[420px]:inline font-bold text-base sm:text-lg lg:text-xl tracking-wide">Project Dignity</span>
        </Link>

        <nav className="min-w-0 flex-1 overflow-x-auto px-2" aria-label="Main Navigation">
          <div className="flex min-w-max items-center justify-center gap-0.5 whitespace-nowrap sm:gap-1 md:gap-1 lg:gap-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="rounded-md px-1.25 py-2 text-[0.72rem] font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-1.5 sm:text-[0.8rem] lg:px-2 lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <button 
          onClick={toggleLanguage}
          className="ml-auto flex shrink-0 items-center gap-2 whitespace-nowrap bg-charcoal hover:bg-gray-700 text-white px-2 py-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-2.5 md:px-2"
          aria-label={i18n.language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
          lang={i18n.language === 'en' ? 'es' : 'en'}
        >
          <Globe size={18} aria-hidden="true" />
          <span className="font-semibold uppercase">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
