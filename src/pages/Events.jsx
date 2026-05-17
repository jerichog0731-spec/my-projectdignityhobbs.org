import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Events = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('seo.events.title')} description={t('seo.events.desc')} path="/events" />
      
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t('events.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('events.intro')}
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Saturday Event */}
          <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-accent mb-10">
            <span className="inline-block bg-accent text-charcoal text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {t('events.featured.dates')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {t('events.featured.title')}
            </h2>
            <div className="space-y-3 text-gray-700 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('events.featured.time')}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('events.featured.location')}</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('events.featured.desc')}
            </p>
          </article>

          {/* More Coming Soon */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-3">{t('events.more.title')}</h2>
            <p className="text-gray-600 mb-6">{t('events.more.desc')}</p>
            <a
              href={t('footer.facebook_url')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
            >
              {t('events.facebook.button')}
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Events;
