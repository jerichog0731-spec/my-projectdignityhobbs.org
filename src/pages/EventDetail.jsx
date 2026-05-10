import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const EventDetail = () => {
  const { t } = useTranslation();
  const { eventId } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);

  // Fallback to event 1 if an invalid ID is somehow passed
  const id = ['1', '2', '3'].includes(eventId) ? eventId : '1';

  return (
    <>
      <SEO 
        title={`${t(`events.list.${id}.title`)} | RSVP`} 
        description={t('seo.event_detail.desc')} 
        path={`/events/${id}`}
        breadcrumbs={[
          { name: 'Events', path: '/events' },
          { name: t(`events.list.${id}.title`), path: `/events/${id}` }
        ]}
      />
      
      <div className="bg-gray-50 py-12 md:py-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/events" className="inline-flex items-center text-primary font-bold hover:text-blue-800 transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            {t('event_detail.back')}
          </Link>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header info */}
            <div className="bg-primary text-white p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
                {t(`events.list.${id}.title`)}
              </h1>
              <div className="flex flex-col md:flex-row gap-6 text-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="font-medium">{t(`events.list.${id}.date`)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>{t(`events.list.${id}.location`)}</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
              {/* Details */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('event_detail.about')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t(`events.list.${id}.desc`)}
                </p>
              </div>

              {/* RSVP Form */}
              <div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">{t('event_detail.rsvp.title')}</h2>
                  
                  {isSuccess ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p className="text-xl font-bold text-green-800 mb-2">{t('event_detail.rsvp.success')}</p>
                      <p className="text-gray-600">{t('event_detail.rsvp.microcopy')}</p>
                    </div>
                  ) : (
                    <form 
                      className="space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsSuccess(true);
                        document.getElementById('aria-live-region').textContent = t('event_detail.rsvp.success');
                      }}
                    >
                      <div>
                        <label htmlFor="rsvp-name" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.name')} *</label>
                        <input type="text" id="rsvp-name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                      </div>
                      <div>
                        <label htmlFor="rsvp-email" className="block text-sm font-medium text-gray-700 mb-1">{t('involved.form.email')} *</label>
                        <input type="email" id="rsvp-email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                      </div>
                      <div>
                        <label htmlFor="rsvp-guests" className="block text-sm font-medium text-gray-700 mb-1">{t('event_detail.rsvp.guests')}</label>
                        <select id="rsvp-guests" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white">
                          <option value="1">1 (Just me)</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4+</option>
                        </select>
                      </div>
                      
                      <button type="submit" className="w-full bg-accent hover:bg-yellow-500 text-charcoal font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary mt-2">
                        {t('event_detail.rsvp.submit')}
                      </button>

                      <p className="text-xs text-gray-500 text-center mt-4 italic">
                        {t('event_detail.rsvp.microcopy')}
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
