import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const ProgramYouth = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.youth.title')} 
        description={t('seo.youth.desc')} 
        path="/programs/youth"
        breadcrumbs={[
          { name: 'Programs', path: '/programs' },
          { name: 'Youth & Family', path: '/programs/youth' }
        ]}
      />
      
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t('youth.title')}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Description & Outcomes */}
            <div>
              <div className="prose prose-lg prose-blue text-gray-600 mb-12">
                <p>{t('youth.desc')}</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">{t('youth.outcomes.title')}</h2>
              <ul className="space-y-4 mb-12">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">{t(`youth.outcomes.${num}`)}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent italic text-gray-700 relative">
                <svg className="w-8 h-8 text-gray-300 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="pl-8 relative z-10">{t('youth.testimonial')}</p>
              </div>
            </div>

            {/* Enrollment Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-8">
                <h2 className="text-3xl font-bold text-primary mb-6">{t('youth.form.title')}</h2>
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    document.getElementById('aria-live-region').textContent = 'Your enrollment request has been submitted successfully.';
                    alert('Enrollment request submitted.');
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('youth.form.name')}</label>
                    <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('youth.form.email')}</label>
                    <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">{t('youth.form.children')}</label>
                    <input type="number" id="children" min="1" max="10" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="programs" className="block text-sm font-medium text-gray-700 mb-1">{t('youth.form.programs')}</label>
                    <select id="programs" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white">
                      <option value="mentorship">Mentorship</option>
                      <option value="tutoring">After-school Tutoring</option>
                      <option value="workshops">Family Workshops</option>
                    </select>
                  </div>

                  <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded border border-gray-100">
                    <p>{t('youth.form.privacy')}</p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="consent" type="checkbox" required className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary" />
                    </div>
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-700 font-medium">
                      {t('youth.form.consent')}
                    </label>
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent">
                    {t('youth.form.submit')}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramYouth;
