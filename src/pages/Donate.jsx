import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Donate = () => {
  const { t } = useTranslation();
  
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');
  const [isTribute, setIsTribute] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setAmount('other');
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Stripe redirect or success
    setIsSuccess(true);
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) liveRegion.textContent = t('donate.success.title');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-50 py-20 min-h-screen flex items-center justify-center">
        <SEO title={t('seo.donate.title')} description={t('seo.donate.desc')} path="/donate" />
        <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-2xl text-center border-t-8 border-accent">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h1 className="text-4xl font-black text-primary mb-4">{t('donate.success.title')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t('donate.success.msg')}</p>
          <button 
            onClick={() => setIsSuccess(false)} 
            className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Make Another Gift
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={t('seo.donate.title')} description={t('seo.donate.desc')} path="/donate" />
      
      {/* Header */}
      <div className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t('donate.headline')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t('donate.intro')}
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Donation Form Container */}
            <div className="lg:w-7/12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative">
              {/* Note for developer */}
              <div className="absolute -top-4 right-8 bg-charcoal text-white text-xs font-mono px-3 py-1 rounded shadow-lg opacity-80 pointer-events-none">
                Stripe Connected
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Frequency Toggle */}
                <div className="bg-gray-100 p-2 rounded-xl flex">
                  <button
                    type="button"
                    onClick={() => setFrequency('onetime')}
                    className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${frequency === 'onetime' ? 'bg-white shadow-md text-primary' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {t('donate.freq.onetime')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center gap-2 ${frequency === 'monthly' ? 'bg-primary shadow-md text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    {t('donate.freq.monthly')}
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['25', '50', '100'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountClick(val)}
                      className={`py-4 rounded-xl font-bold text-xl transition-all border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${amount === val ? 'bg-accent border-accent text-charcoal shadow-md' : 'bg-white border-gray-200 text-charcoal hover:border-accent hover:bg-gray-50'}`}
                    >
                      ${val}
                    </button>
                  ))}
                  <div className={`relative flex items-center border-2 rounded-xl transition-all overflow-hidden ${amount === 'other' ? 'border-accent ring-2 ring-accent ring-opacity-50' : 'border-gray-200 bg-white'}`}>
                    <span className="absolute left-4 font-bold text-gray-500">$</span>
                    <input 
                      type="number" 
                      min="1" 
                      placeholder={t('donate.amounts.other')}
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      onClick={() => setAmount('other')}
                      className="w-full pl-8 pr-4 py-4 font-bold text-lg bg-transparent focus:outline-none text-charcoal"
                      aria-label={t('donate.amounts.other')}
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <label htmlFor="donor-name" className="block text-sm font-bold text-gray-700 mb-2">{t('donate.form.name')} *</label>
                    <input type="text" id="donor-name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="donor-email" className="block text-sm font-bold text-gray-700 mb-2">{t('donate.form.email')} *</label>
                    <input type="email" id="donor-email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                </div>

                {/* Tribute Options */}
                <div className="pt-4">
                  <div className="flex items-center mb-4">
                    <input 
                      id="is-tribute" 
                      type="checkbox" 
                      checked={isTribute}
                      onChange={(e) => setIsTribute(e.target.checked)}
                      className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary" 
                    />
                    <label htmlFor="is-tribute" className="ml-3 text-gray-700 font-medium cursor-pointer">
                      {t('donate.tribute.checkbox')}
                    </label>
                  </div>
                  
                  {isTribute && (
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                      <div>
                        <label htmlFor="tribute-type" className="block text-sm font-bold text-gray-700 mb-2">{t('donate.tribute.type')}</label>
                        <select id="tribute-type" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white">
                          <option value="honor">{t('donate.tribute.honor')}</option>
                          <option value="memory">{t('donate.tribute.memory')}</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tribute-name" className="block text-sm font-bold text-gray-700 mb-2">{t('donate.tribute.name')}</label>
                        <input type="text" id="tribute-name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Processing Fee Checkbox */}
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start mt-6">
                  <div className="flex items-center h-6">
                    <input id="cover-fee" type="checkbox" defaultChecked className="w-5 h-5 text-primary bg-white border-blue-300 rounded focus:ring-primary" />
                  </div>
                  <label htmlFor="cover-fee" className="ml-3 text-sm text-blue-900 leading-tight">
                    {t('donate.fee.checkbox')}
                  </label>
                </div>

                {/* Anonymous Checkbox */}
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-gray-500 italic">{t('donate.recognition.note')}</p>
                  <div className="flex items-center">
                    <input id="anonymous" type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                    <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700 font-medium">
                      {t('donate.recognition.anon')}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-black text-lg py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  {t('donate.form.submit')}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  {t('donate.webhook.note')}
                </p>

              </form>
            </div>

            {/* Context & Tiers Sidebar */}
            <div className="lg:w-5/12 space-y-8">
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
                <h2 className="text-2xl font-bold text-primary mb-6">{t('donate.tiers.title')}</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="font-bold text-lg text-charcoal">{t('donate.tiers.bronze.title')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t('donate.tiers.bronze.desc')}</p>
                  </div>
                  <div className="border-l-2 border-gray-400 pl-4">
                    <h3 className="font-bold text-lg text-charcoal">{t('donate.tiers.silver.title')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t('donate.tiers.silver.desc')}</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h3 className="font-bold text-lg text-charcoal">{t('donate.tiers.gold.title')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t('donate.tiers.gold.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal text-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <h3 className="text-xl font-bold">Privacy & Security</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {t('donate.privacy.snippet')}
                  <a href="#" className="text-accent hover:underline font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                    {t('donate.privacy.link')}
                  </a>.
                </p>
                <div className="flex items-center gap-2 mt-6 border-t border-gray-700 pt-6">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Secured by Stripe</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
