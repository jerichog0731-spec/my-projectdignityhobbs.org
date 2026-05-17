import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Donate = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('seo.donate.title')} description={t('seo.donate.desc')} path="/donate" />

      {/* Header */}
      <div className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t('donate.headline')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            {t('donate.intro')}
          </p>
          <a
            href={t('donate.gofundme.url')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-yellow-400 text-charcoal font-extrabold py-4 px-10 rounded-xl text-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-xl hover:-translate-y-1 hover:shadow-2xl"
          >
            {t('donate.gofundme.button')}
          </a>
        </div>
      </div>

      {/* Impact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">{t('donate.impact.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-2xl shadow-md border-t-4 border-accent p-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">{t(`donate.impact.${num}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`donate.impact.${num}.desc`)}</p>
              </div>
            ))}
          </div>

          {/* Other Ways to Help */}
          <div className="bg-charcoal text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-accent mb-8">{t('donate.other.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-2">{t('donate.other.1.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('donate.other.1.desc')}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{t('donate.other.2.title')}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">{t('donate.other.2.desc')}</p>
                <Link
                  to="/volunteer"
                  className="text-accent hover:text-yellow-300 font-bold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {t('donate.other.2.link')} &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
            {t('donate.disclaimer')}
          </p>
        </div>
      </section>
    </>
  );
};

export default Donate;
