import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

// Paste your Zeffy donation form URL here.
// In Zeffy: Dashboard → Donation forms → Share → Embed → copy the iframe src URL.
const ZEFFY_FORM_URL = 'https://www.zeffy.com/en-US/donation-form/YOUR_FORM_ID';

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
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t('donate.intro')}
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Zeffy Donation Form Embed */}
            <div className="lg:w-7/12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <iframe
                title="Donate to Project Dignity Hobbs"
                src={ZEFFY_FORM_URL}
                width="100%"
                height="720"
                style={{ border: 'none', display: 'block' }}
                allow="payment"
                loading="lazy"
              />
            </div>

            {/* Context & Tiers Sidebar */}
            <div className="lg:w-5/12 space-y-8">
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
                <h2 className="text-2xl font-bold text-primary mb-6">{t('donate.tiers.title')}</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="font-bold text-lg text-charcoal">{t('donate.tiers.bronze.title')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t('donate.tiers.bronze.desc')}</p>
                  </div>
                  <div className="border-l-2 border-gray-400 pl-4">
                    <h3 className="font-bold text-lg text-charcoal">{t('donate.tiers.silver.title')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t('donate.tiers.silver.desc')}</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h3 className="font-bold text-lg text-charcoal">{t('donate.tiers.gold.title')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t('donate.tiers.gold.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal text-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <h3 className="text-xl font-bold">Privacy & Security</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {t('donate.privacy.snippet')}
                  <a href="#" className="text-accent hover:underline font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                    {t('donate.privacy.link')}
                  </a>.
                </p>
                <div className="flex items-center gap-2 mt-6 border-t border-gray-700 pt-6">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Processed by Zeffy — 100% free for nonprofits</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
