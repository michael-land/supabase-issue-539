import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from './lib/database.types';

export async function middleware(req: NextRequest) {
  // console.log({ url: req.url });
  const res = NextResponse.next();
  // console.log({ ...req.headers });
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
  const session = await supabase.auth.getSession();
  console.log({ middlewareSessionExpiresIn: session.data.session?.expires_in });
  return res;
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
