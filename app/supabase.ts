import { createServerSupabaseClient } from '@supabase/auth-helpers-shared';
import { cookies, headers } from 'next/headers';

export function supabase() {
  return createServerSupabaseClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    getRequestHeader: (key) => {
      const headerList = headers();
      return headerList.get(key) || '';
    },
    getCookie: (name) => {
      const nextCookies = cookies();
      return nextCookies.get(name)?.value;
    },
    setCookie: async (name, value, options) => {
      const headerList = headers();
      // if (!headerList.get('next-action') || headerList.get('x-action-redirect')) return;

      // @ts-ignore
      cookies().set(name, value, options);
    },
  });
}
