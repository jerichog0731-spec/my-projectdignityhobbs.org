import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const GetInvolved = () => {
  const { t } = useTranslation();
  const [formSuccess, setFormSuccess] = useState(false);

  return (
    <>
      <SEO title={t('seo.involved.title')} description={t('seo.involved.desc')} path="/get-involved" />
      
      {/* Hero */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t('involved.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('involved.intro')}
          </p>
        </div>
      </div>

      {/* Why Partner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('involved.why.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t('involved.why.desc')}</p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">{t('involved.types.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{t(`involved.types.${num}.title`)}</h3>
                <p className="text-gray-600">{t(`involved.types.${num}.desc`)}</p>
              </div>
            ))}
          </div>

          {/* Partner Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">{t('involved.form.title')}</h2>

            {formSuccess ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="text-xl font-bold">{t('involved.form.success')}</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSuccess(true);
                  document.getElementById('aria-live-region').textContent = t('involved.form.success');
                }}
              >
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.org')} *</label>
                  <input type="text" id="org" name="org" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.contact')} *</label>
                  <input type="text" id="contact" name="contact" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="inv-email" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.email')} *</label>
                  <input type="email" id="inv-email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="inv-phone" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.phone')}</label>
                  <input type="tel" id="inv-phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="inv-type" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.type')}</label>
                  <select id="inv-type" name="type" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{t(`involved.types.${num}.title`)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="inv-message" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.message')}</label>
                  <textarea id="inv-message" name="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent shadow-md">
                  {t('involved.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
