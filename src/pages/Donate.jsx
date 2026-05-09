import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Donate = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.donate')} 
        description={t('donate.subtitle')} 
        path="/donate" 
      />
      
      <div className="bg-gray-50 min-h-[calc(100vh-160px)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center border-t-8 border-primary">
            
            <div className="w-20 h-20 bg-accent text-charcoal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            
            <h1 className="text-4xl font-extrabold text-primary mb-6">
              {t('donate.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              {t('donate.subtitle')}
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Make a Secure Donation</h2>
              <p className="text-gray-500 mb-8">{t('donate.disclaimer')}</p>
              
              {/* Stripe Placeholder */}
              <button 
                onClick={() => alert('Stripe checkout integration would launch here.')}
                className="w-full sm:w-auto bg-[#635BFF] hover:bg-[#4B45FF] text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 flex items-center justify-center gap-2 mx-auto"
              >
                <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none"><path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm4.264 28.536c-1.583.743-3.693 1.071-5.743 1.071-5.071 0-8.521-2.586-8.521-7.793 0-5.464 3.65-8.136 8.971-8.136 1.836 0 3.636.336 4.964.914l-.943 3.621c-1.071-.486-2.529-.8-3.921-.8-2.921 0-4.664 1.4-4.664 3.964 0 2.214 1.4 3.829 4.3 3.829 1.429 0 2.871-.257 4.129-.771l1.428 4.099z" fill="currentColor"/></svg>
                {t('donate.button')}
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              Project Dignity Hobbs is a 501(c)(3) nonprofit organization. Your donations are tax-deductible to the fullest extent of the law.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
