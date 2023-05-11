import { redirect } from 'next/navigation';
import { supabase } from '../supabase';

export default async function SignUpPage() {
  return (
    <form>
      <button formAction={signUp}>signUp</button>
    </form>
  );
}

async function signUp() {
  'use server';
  await supabase().auth.signUp({
    email: 'jon@supabase.com',
    password: 'sup3rs3cur3',
  });
  redirect('/');
}
