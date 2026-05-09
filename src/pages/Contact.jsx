import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <SEO title={t('seo.contact.title')} description={t('seo.contact.desc')} path="/contact" />
      
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('contact.intro')}
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.info.title')}</h2>
                
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
                  <div className="mb-6">
                    <h3 className="font-bold text-charcoal text-lg flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line pl-7">{t('contact.info.address_val')}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-charcoal text-lg flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {t('contact.info.hours')}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line pl-7">{t('contact.info.hours_val')}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-charcoal text-lg flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      Email
                    </h3>
                    <p className="text-gray-600 pl-7">
                      <a href="mailto:hello@projectdignity.org" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">hello@projectdignity.org</a>
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <div>
                    <p className="text-blue-900 font-medium">
                      <Link to="/about" className="underline hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{t('contact.info.staff_link')}</Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500 bg-gray-100">
                  <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                  <span>Interactive Map Embed Placeholder</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 sticky top-8">
                <h2 className="text-3xl font-bold text-primary mb-6">{t('contact.form.title')}</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-xl font-bold mb-2">{t('contact.form.success')}</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 text-primary font-bold hover:underline focus:outline-none"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form 
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSuccess(true);
                      document.getElementById('aria-live-region').textContent = t('contact.form.success');
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')} *</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')} *</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.subject')} *</label>
                      <input type="text" id="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')} *</label>
                      <textarea id="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent shadow-md hover:-translate-y-1 hover:shadow-lg flex justify-center items-center gap-2">
                      {t('contact.form.submit')}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>

                    <p className="text-xs text-gray-400 text-center mt-4">
                      {t('contact.form.spam_note')}
                    </p>
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

export default Contact;
