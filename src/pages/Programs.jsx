import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Programs = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.programs.title')} 
        description={t('seo.programs.desc')} 
        path="/programs"
        breadcrumbs={[{ name: 'Programs', path: '/programs' }]}
      />
      
      <div className="bg-primary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('programs.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('programs.intro')}
          </p>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Community Care */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="h-56 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1593113563332-6a848ff78096?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Volunteers sorting food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{t('programs.community.title')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{t('programs.community.desc')}</p>
                </div>
                <Link to="/programs/community-care" className="bg-accent hover:bg-yellow-500 text-charcoal text-center font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary w-full">
                  {t('programs.community.link')}
                </Link>
              </div>
            </div>

            {/* Workforce Pathways */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="h-56 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Job training workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{t('programs.workforce.title')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{t('programs.workforce.desc')}</p>
                </div>
                <Link to="/programs/workforce" className="bg-accent hover:bg-yellow-500 text-charcoal text-center font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary w-full">
                  {t('programs.workforce.link')}
                </Link>
              </div>
            </div>

            {/* Youth & Family */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="h-56 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1526976663112-91229c15e802?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Youth mentoring session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{t('programs.youth.title')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{t('programs.youth.desc')}</p>
                </div>
                <Link to="/programs/youth" className="bg-accent hover:bg-yellow-500 text-charcoal text-center font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary w-full">
                  {t('programs.youth.link')}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
