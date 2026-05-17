import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Programs = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.programs.title')} 
        description={t('seo.programs.desc')} 
        path="/what-we-distribute"
        breadcrumbs={[{ name: t('nav.programs'), path: '/what-we-distribute' }]}
      />
      
      {/* Hero */}
      <div className="bg-primary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('programs.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('programs.intro')}
          </p>
        </div>
      </div>

      {/* What We Distribute */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {['hygiene', 'laundry', 'cleaning'].map((cat) => (
              <div key={cat} className="bg-white rounded-2xl shadow-md border-t-4 border-accent p-8">
                <h2 className="text-xl font-bold text-primary mb-4">{t(`programs.${cat}.title`)}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{t(`programs.${cat}.desc`)}</p>
                {cat === 'cleaning' && (
                  <p className="mt-4 text-xs font-bold text-accent uppercase tracking-wider">{t('programs.cleaning.unique')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('programs.how_title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <ol className="space-y-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-accent text-charcoal font-extrabold text-lg rounded-full flex items-center justify-center shadow">
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{t(`programs.how.${num}.title`)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(`programs.how.${num}.desc`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('programs.serve.title')}</h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">{t('programs.serve.body')}</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li key={num} className="flex items-start gap-3 bg-blue-900 rounded-xl p-4 border border-blue-800">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">{t(`programs.serve.${num}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4">{t('programs.cta.title')}</h2>
          <p className="text-lg mb-8 leading-relaxed">{t('programs.cta.desc')}</p>
          <Link
            to="/volunteer"
            className="inline-block bg-primary hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary shadow-lg"
          >
            {t('programs.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programs;
