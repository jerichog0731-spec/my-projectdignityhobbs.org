import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const GetInvolved = () => {
  const { t } = useTranslation();
  const [volSuccess, setVolSuccess] = useState(false);
  const [corpSuccess, setCorpSuccess] = useState(false);

  return (
    <>
      <SEO title={t('seo.involved.title')} description={t('seo.involved.desc')} path="/get-involved" />
      
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Roles List */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">{t('involved.volunteer.title')}</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
                    <h3 className="text-xl font-bold text-charcoal mb-2">{t(`involved.volunteer.role${num}.title`)}</h3>
                    <p className="text-gray-600">{t(`involved.volunteer.role${num}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">{t('involved.form.title')}</h2>
              
              {volSuccess ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <p className="font-medium">{t('involved.form.success')}</p>
                </div>
              ) : (
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setVolSuccess(true);
                    document.getElementById('aria-live-region').textContent = t('involved.form.success');
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.name')} *</label>
                      <input type="text" id="vol-name" required placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.phone')} *</label>
                      <input type="tel" id="vol-phone" required placeholder="Optional" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.email')} *</label>
                    <input type="email" id="vol-email" required placeholder="you@domain.org" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                  
                  <div>
                    <label htmlFor="vol-role" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.role')}</label>
                    <select id="vol-role" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white">
                      <option value="pantry">{t('involved.volunteer.role1.title')}</option>
                      <option value="mentor">{t('involved.volunteer.role2.title')}</option>
                      <option value="events">{t('involved.volunteer.role3.title')}</option>
                      <option value="any">Any Available Role</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vol-avail" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.availability')}</label>
                    <input type="text" id="vol-avail" placeholder="e.g. Weekends, Tuesday evenings" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="vol-bg" type="checkbox" required className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary" />
                    </div>
                    <label htmlFor="vol-bg" className="ml-2 text-sm text-gray-700">
                      {t('involved.form.bgcheck')}
                    </label>
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent">
                    {t('involved.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Corporate Partnership Section */}
          <div className="bg-charcoal text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-accent mb-6">{t('involved.corporate.title')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {t('involved.corporate.desc')}
                </p>
                <div className="space-y-4 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Program Sponsorships
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Employee Volunteer Days
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    In-Kind Donations
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 md:p-12">
                {corpSuccess ? (
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="w-16 h-16 bg-accent text-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p className="text-xl font-medium text-white">{t('involved.form.success')}</p>
                    </div>
                  </div>
                ) : (
                  <form 
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCorpSuccess(true);
                      document.getElementById('aria-live-region').textContent = 'Corporate partnership request submitted.';
                    }}
                  >
                    <div>
                      <label htmlFor="corp-company" className="block text-sm font-medium text-gray-300 mb-1">{t('involved.corporate.form.company')} *</label>
                      <input type="text" id="corp-company" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="corp-contact" className="block text-sm font-medium text-gray-300 mb-1">{t('involved.corporate.form.contact')} *</label>
                      <input type="text" id="corp-contact" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="corp-email" className="block text-sm font-medium text-gray-300 mb-1">{t('involved.corporate.form.email')} *</label>
                      <input type="email" id="corp-email" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="corp-msg" className="block text-sm font-medium text-gray-300 mb-1">{t('involved.corporate.form.message')}</label>
                      <textarea id="corp-msg" rows="3" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-accent hover:bg-yellow-500 text-charcoal font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white">
                      {t('involved.corporate.form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default GetInvolved;
