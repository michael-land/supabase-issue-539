import { supabase } from '@/app/supabase';
import { redirect } from 'next/navigation';

export default async function PostCreatePage() {
  return (
    <form action={create}>
      <input name="content" />
    </form>
  );
}

export async function create(data: FormData) {
  'use server';

  const result = await supabase()
    .from('posts')
    .insert({
      content: data.get('content'),
      authorId: 'f4d096b3-eb2a-4cac-a420-91e4becee90f',
      slug: data.get('content'),
    });
  console.log(result);
  redirect('/');
}
