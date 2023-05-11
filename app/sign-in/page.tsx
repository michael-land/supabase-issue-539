import { redirect } from 'next/navigation';
import { supabase } from '../supabase';

export default async function SignInPage() {
  return (
    <form>
      <button formAction={signIn}>signIn</button>
    </form>
  );
}

async function signIn() {
  'use server';
  await supabase().auth.signInWithPassword({
    email: 'jon@supabase.com',
    password: 'sup3rs3cur3',
  });
  redirect('/');
}
