import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (fields) => {
    const errs = {};
    if (!fields.name.trim()) errs.name = t('form.validation.required');
    if (!fields.email.trim()) errs.email = t('form.validation.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = t('form.validation.email');
    if (!fields.subject.trim()) errs.subject = t('form.validation.required');
    if (!fields.message.trim()) errs.message = t('form.validation.required');
    return errs;
  };

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
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.info.title')}</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-6">

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{t('contact.info.email_label')}</h3>
                    <a href={`mailto:${t('contact.info.email_val')}`} className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                      {t('contact.info.email_val')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{t('contact.info.phone_label')}</h3>
                    <a href={`tel:${t('contact.info.phone_val')}`} className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                      {t('contact.info.phone_val')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{t('contact.info.location_label')}</h3>
                    <p className="text-gray-600">{t('contact.info.location_val')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{t('contact.info.hours_label')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t('contact.info.hours_val')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{t('contact.info.facebook_label')}</h3>
                    <a
                      href={t('contact.info.facebook_url')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      facebook.com/ProjectDignityHobbs
                    </a>
                  </div>
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
                    <p className="text-xl font-bold">{t('contact.form.success')}</p>
                  </div>
                ) : (
                  <form 
                    className="space-y-6"
                    noValidate
                    onSubmit={(e) => {
                      e.preventDefault();
                      const fd = new FormData(e.target);
                      const fields = {
                        name: fd.get('name') || '',
                        email: fd.get('email') || '',
                        subject: fd.get('subject') || '',
                        message: fd.get('message') || '',
                      };
                      const errs = validate(fields);
                      if (Object.keys(errs).length > 0) {
                        setErrors(errs);
                        return;
                      }
                      setErrors({});
                      try {
                        setIsSuccess(true);
                        setIsError(false);
                        document.getElementById('aria-live-region').textContent = t('contact.form.success');
                      } catch {
                        setIsError(true);
                        document.getElementById('aria-live-region').textContent = t('contact.form.error');
                      }
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')} *</label>
                      <input type="text" id="name" name="name" required className={`w-full px-4 py-3 border rounded-lg focus:ring-accent focus:border-accent ${errors.name ? 'border-red-500' : 'border-gray-300'}`} aria-describedby={errors.name ? 'err-name' : undefined} />
                      {errors.name && <p id="err-name" role="alert" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')} *</label>
                      <input type="email" id="email" name="email" required className={`w-full px-4 py-3 border rounded-lg focus:ring-accent focus:border-accent ${errors.email ? 'border-red-500' : 'border-gray-300'}`} aria-describedby={errors.email ? 'err-email' : undefined} />
                      {errors.email && <p id="err-email" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.subject')} *</label>
                      <input type="text" id="subject" name="subject" required className={`w-full px-4 py-3 border rounded-lg focus:ring-accent focus:border-accent ${errors.subject ? 'border-red-500' : 'border-gray-300'}`} aria-describedby={errors.subject ? 'err-subject' : undefined} />
                      {errors.subject && <p id="err-subject" role="alert" className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')} *</label>
                      <textarea id="message" name="message" rows="5" required className={`w-full px-4 py-3 border rounded-lg focus:ring-accent focus:border-accent ${errors.message ? 'border-red-500' : 'border-gray-300'}`} aria-describedby={errors.message ? 'err-message' : undefined}></textarea>
                      {errors.message && <p id="err-message" role="alert" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent shadow-md hover:-translate-y-1 hover:shadow-lg flex justify-center items-center gap-2">
                      {t('contact.form.submit')}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>

                    {isError && (
                      <p role="alert" className="text-sm text-red-600 text-center">{t('contact.form.error')}</p>
                    )}
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
