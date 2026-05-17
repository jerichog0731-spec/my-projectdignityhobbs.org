import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.home.title')} 
        description={t('seo.home.desc')} 
        path="/" 
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link 
              to="/donate" 
              className="bg-accent hover:bg-yellow-500 text-charcoal font-bold py-4 px-8 rounded-lg shadow-lg hover:-translate-y-1 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 w-full sm:w-auto"
            >
              {t('home.hero.cta_primary')}
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white w-full sm:w-auto"
            >
              {t('home.hero.cta_secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="bg-accent py-12 text-charcoal relative z-20 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-charcoal/20">
          {[1, 2, 3].map((num) => (
            <div key={num} className="pt-4 md:pt-0 flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-black mb-2 italic opacity-60">Coming Soon</span>
              <span className="text-lg font-medium font-serif">{t(`home.metrics.${num}.label`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dual CTA Section (Donate & Volunteer) */}
      <section className="bg-primary text-white py-0 flex flex-col md:flex-row">
        {/* Donate CTA */}
        <div className="flex-1 p-12 md:p-24 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-blue-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">{t('home.donate_cta.title')}</h2>
          <p className="text-xl mb-10 text-gray-200">{t('home.donate_cta.desc')}</p>
          <Link 
            to="/donate" 
            className="bg-accent hover:bg-yellow-500 text-charcoal font-bold py-4 px-8 rounded-lg shadow-lg hover:-translate-y-1 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            {t('home.donate_cta.button')}
          </Link>
        </div>
        
        {/* Volunteer CTA */}
        <div className="flex-1 p-12 md:p-24 flex flex-col items-start justify-center bg-blue-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('home.volunteer_cta.title')}</h2>
          <p className="text-xl mb-10 text-gray-300">{t('home.volunteer_cta.desc')}</p>
          <Link 
            to="/volunteer" 
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
          >
            {t('home.volunteer_cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
