import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('seo.privacy.title')} description={t('seo.privacy.desc')} path="/privacy" />
      
      <div className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {t('privacy.title')}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue text-gray-700">
          <p>{t('privacy.body1')}</p>
          <p>{t('privacy.body2')}</p>
          <p>{t('privacy.body3')}</p>
          <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-100">
            Last updated: May 9, 2026. If you have any questions regarding this privacy policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
