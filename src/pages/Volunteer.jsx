import React, { useState } from 'react';
import SEO from '../components/SEO';

const Volunteer = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <SEO
        title="Volunteer — Project Dignity Hobbs"
        description="Join our volunteer team at Project Dignity Hobbs. Sign up to help distribute hygiene supplies and cleaning products to low-income residents in Hobbs, NM."
        path="/volunteer"
      />

      {/* Hero */}
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Volunteer With Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Help us bring dignity to Hobbs families by distributing hygiene and cleaning supplies to those who need them most.
          </p>
        </div>
      </div>

      {/* Why Volunteer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why It Matters</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Project Dignity Hobbs was founded on the belief that every person deserves access to basic hygiene and household essentials — regardless of income. Our volunteers are the backbone of everything we do. Whether you can give a few hours at a distribution event or help us sort and pack supplies, your time makes a real difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '🧼', title: 'Supply Distribution', desc: 'Help sort, pack, and hand out hygiene and cleaning supplies at our distribution events.' },
              { icon: '📣', title: 'Community Outreach', desc: 'Spread the word about Project Dignity in your neighborhood, church, or workplace.' },
              { icon: '🌱', title: 'Events Support', desc: 'Assist at our public launch and future Farmers Market events starting June 13, 2026.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Sign-Up Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sign Up to Volunteer</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {success ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl flex items-start gap-4">
                <svg className="w-6 h-6 text-green-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-medium">Thank you! Our volunteer coordinator will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSuccess(true);
                  const live = document.getElementById('aria-live-region');
                  if (live) live.textContent = 'Volunteer application submitted successfully.';
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" id="vol-name" required placeholder="Your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="vol-phone" placeholder="(555) 000-0000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" id="vol-email" required placeholder="you@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                </div>

                <div>
                  <label htmlFor="vol-role" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                  <select id="vol-role" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white">
                    <option value="distribution">Supply Distribution</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="events">Events Support</option>
                    <option value="any">Any Available Role</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="vol-avail" className="block text-sm font-medium text-gray-700 mb-1">General Availability</label>
                  <input type="text" id="vol-avail" placeholder="e.g. Weekends, Saturday mornings" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" />
                </div>

                <div>
                  <label htmlFor="vol-notes" className="block text-sm font-medium text-gray-700 mb-1">Anything else you'd like us to know?</label>
                  <textarea id="vol-notes" rows="3" placeholder="Optional message..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
                >
                  Submit Volunteer Application
                </button>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Questions? Email us at{' '}
            <a href="mailto:jgutierrez@projectdignityhobbs.org" className="text-primary font-medium hover:underline">
              jgutierrez@projectdignityhobbs.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
