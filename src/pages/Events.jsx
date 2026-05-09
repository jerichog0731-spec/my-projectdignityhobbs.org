import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Events = () => {
  const { t } = useTranslation();

  const eventsList = [
    { id: 1, slug: 'summer-block-party' },
    { id: 2, slug: 'youth-mentorship-orientation' },
    { id: 3, slug: 'housing-rights-workshop' }
  ];

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
          
          <p className="sr-only" aria-live="polite">{t('events.a11y_note')}</p>

          <div className="space-y-6" role="list" aria-label="Upcoming events list">
            {eventsList.map((event) => (
              <article key={event.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center focus-within:ring-4 focus-within:ring-accent" role="listitem">
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {t(`events.list.${event.id}.title`)}
                  </h2>
                  
                  <div className="flex flex-col gap-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span className="font-medium">{t(`events.list.${event.id}.date`)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span>{t(`events.list.${event.id}.location`)}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t(`events.list.${event.id}.desc`)}
                  </p>
                </div>

                <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
                  <Link 
                    to={`/events/${event.id}`}
                    className="block w-full text-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors focus:outline-none"
                    aria-label={`RSVP for ${t(`events.list.${event.id}.title`)}`}
                  >
                    {t('events.button.rsvp')}
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Events;
