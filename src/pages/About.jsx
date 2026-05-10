import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.about.title')} 
        description={t('seo.about.desc')} 
        path="/about"
        breadcrumbs={[{ name: 'About', path: '/about' }]}
      />
      
      {/* Header / Mission & Vision */}
      <div className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{t('about.mission.title')}</h1>
            <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed text-accent">
              "{t('about.mission.text')}"
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('about.vision.title')}</h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t('about.values.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{t(`about.values.${num}.title`)}</h3>
                <p className="text-gray-600">{t(`about.values.${num}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Bios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t('about.staff.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center text-center">
                <img 
                  src={`https://images.unsplash.com/photo-${num === 1 ? '1573496359142-b8d87734a5a2' : num === 2 ? '1560250097-0b93528c311a' : '1580489944761-15a19d654956'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80`} 
                  alt={t(`about.staff.${num}.alt`)} 
                  className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 border-4 border-gray-50"
                />
                <h3 className="text-2xl font-bold text-primary mb-1">{t(`about.staff.${num}.name`)}</h3>
                <h4 className="text-lg font-medium text-accent mb-4">{t(`about.staff.${num}.role`)}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {t(`about.staff.${num}.bio`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Impact Summary */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('about.timeline.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-accent before:via-white before:to-transparent">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-charcoal font-bold">
                  <span className="sr-only">Step {num}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-blue-900 p-6 rounded-xl shadow-lg ml-4 md:ml-0 border border-blue-800">
                  <span className="font-bold text-accent text-lg mb-2 block">{t(`about.timeline.${num}.year`)}</span>
                  <p className="text-gray-200">{t(`about.timeline.${num}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">{t('about.partners.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            {t('about.partners.intro')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Using text blocks as accessible placeholders for partner logos */}
            <div className="p-4" aria-label={t('about.partners.1.alt')} role="img">
              <span className="text-2xl font-black font-serif text-charcoal">City of Hobbs</span>
            </div>
            <div className="p-4" aria-label={t('about.partners.2.alt')} role="img">
              <span className="text-2xl font-black text-charcoal">Hobbs Foundation</span>
            </div>
            <div className="p-4" aria-label={t('about.partners.3.alt')} role="img">
              <span className="text-2xl font-black italic text-charcoal">NM United</span>
            </div>
            <div className="p-4" aria-label={t('about.partners.4.alt')} role="img">
              <span className="text-2xl font-black tracking-widest text-charcoal">FOOD BANK</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
