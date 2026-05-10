import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const createClient = () => {
  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error('Supabase environment variables are missing.');
  }

  return createBrowserClient(supabaseUrl, supabasePublishableKey);
};
