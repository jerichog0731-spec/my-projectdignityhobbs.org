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
              <span className="text-4xl md:text-5xl font-black mb-2">{t(`home.metrics.${num}.value`)}</span>
              <span className="text-lg font-medium font-serif">{t(`home.metrics.${num}.label`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Program Preview Cards Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t('home.programs.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${num === 1 ? '1593113563332-6a848ff78096' : num === 2 ? '1582213782179-e0d53f98f2ca' : '1526976663112-91229c15e802'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                    alt={t(`home.programs.${num}.title`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{t(`home.programs.${num}.title`)}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{t(`home.programs.${num}.desc`)}</p>
                  </div>
                  <Link to="/about" className="text-primary font-bold hover:text-blue-800 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Teasers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t('home.news.title')}</h2>
              <div className="w-24 h-1 bg-accent"></div>
            </div>
            <a href="#" className="hidden md:inline-flex text-primary font-bold hover:text-blue-800 transition-colors items-center gap-2 mt-4 md:mt-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
              View All News
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((num) => (
              <a key={num} href="#" className="block bg-gray-50 rounded-xl p-6 md:p-8 hover:bg-gray-100 transition-colors border-l-4 border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2">{t(`home.news.${num}.title`)}</h3>
                    <p className="text-gray-600">{t(`home.news.${num}.desc`)}</p>
                  </div>
                  <div className="shrink-0 text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <a href="#" className="md:hidden mt-8 inline-flex text-primary font-bold hover:text-blue-800 transition-colors items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
            View All News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
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
          <a 
            href="mailto:hello@projectdignity.org" 
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
          >
            {t('home.volunteer_cta.button')}
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
