import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../utils/supabase/client';

const NewsletterSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const insertSubscriber = async (supabase, nameValue, normalizedEmail) => {
    const payloads = [
      { first_name: nameValue, email: normalizedEmail },
      { name: nameValue, email: normalizedEmail },
      { firstName: nameValue, email: normalizedEmail },
      { full_name: nameValue, email: normalizedEmail },
    ];

    let lastError = null;

    for (const payload of payloads) {
      const { error } = await supabase.from('newsletter_subscribers').insert([payload]);

      if (!error) {
        return null;
      }

      lastError = error;

      const missingColumn =
        error.code === 'PGRST204' &&
        /Could not find the .* column of 'newsletter_subscribers'/i.test(error.message || '');

      if (missingColumn) {
        continue;
      }

      return error;
    }

    return lastError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    const normalizedEmail = email.trim().toLowerCase();

    try {
      const supabase = createClient();

      const { data: existing, error: existingError } = await supabase
        .from('newsletter_subscribers')
        .select('id')
        .eq('email', normalizedEmail)
        .maybeSingle();

      if (existingError) {
        throw existingError;
      }

      if (existing) {
        setErrorMessage('You are already subscribed. Thank you for staying with us.');
        setIsSubmitting(false);
        return;
      }

      const insertError = await insertSubscriber(supabase, firstName.trim(), normalizedEmail);

      if (insertError) {
        const duplicateError =
          insertError.code === '23505' ||
          /duplicate|already exists|unique/i.test(insertError.message || '');

        const permissionError =
          insertError.code === '42501' ||
          /row-level security|permission denied|not allowed/i.test(insertError.message || '');

        const schemaMismatchError =
          insertError.code === 'PGRST204' ||
          /column of 'newsletter_subscribers'|schema cache/i.test(insertError.message || '');

        if (duplicateError) {
          setErrorMessage('You are already subscribed. Thank you for staying with us.');
          setIsSubmitting(false);
          return;
        }

        if (permissionError) {
          setErrorMessage('Signup is temporarily unavailable due to permissions setup. Please try again shortly.');
          setIsSubmitting(false);
          return;
        }

        if (schemaMismatchError) {
          setErrorMessage('Signup is temporarily unavailable while we finish setup. Please try again shortly.');
          setIsSubmitting(false);
          return;
        }

        throw insertError;
      }

      const liveRegion = document.getElementById('aria-live-region');
      if (liveRegion) {
        liveRegion.textContent = 'Newsletter signup successful.';
      }

      setSuccessMessage('Success. Welcome to the movement. Redirecting...');
      window.setTimeout(() => {
        navigate('/thank-you');
      }, 700);
    } catch (error) {
      // Keep this for debugging in dev tools without exposing internals to users.
      console.error('Newsletter signup error:', error);
      setErrorMessage('Sorry, we could not sign you up right now. Please try again shortly.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/20 bg-white/8 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-black text-accent">Newsletter</h3>
      <p className="mb-4 text-sm text-gray-200">Get frontline updates, volunteer opportunities, and monthly impact reports.</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="newsletter-first-name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-200">
            First Name
          </label>
          <input
            id="newsletter-first-name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Enter your first name"
            className="w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 font-medium text-white placeholder:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            required
          />
        </div>

        <div>
          <label htmlFor="newsletter-email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-200">
            Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@domain.org"
            className="w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 font-medium text-white placeholder:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-yellow-700 bg-accent px-5 py-3 text-base font-black uppercase tracking-wide text-charcoal shadow-[0_8px_0_#8b6d00] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-charcoal border-t-transparent" aria-hidden="true"></span>
              Joining...
            </>
          ) : (
            'Join the Movement'
          )}
        </button>

        {successMessage ? (
          <p role="status" className="animate-toast-in rounded-lg border border-emerald-300/50 bg-emerald-100/20 px-3 py-2 text-sm text-emerald-100">
            {successMessage}
          </p>
        ) : null}
        {errorMessage ? <p role="alert" className="text-sm text-yellow-100">{errorMessage}</p> : null}
      </form>
    </div>
  );
};

export default NewsletterSignup;
