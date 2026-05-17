import React from 'react';
import SEO from '../components/SEO';

const ThankYou = () => {
  return (
    <>
      <SEO
        title="Thank You | Project Dignity Hobbs"
        description="Thank you for joining the Project Dignity Hobbs movement."
        path="/thank-you"
      />
      <section className="min-h-[65vh] bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl">
            <h1 className="mb-4 text-4xl font-black text-primary">Thank You</h1>
            <p className="text-lg text-gray-700">
              You are officially on the list. We will send mission updates and opportunities to take action.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
