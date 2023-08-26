import { useQuery } from '@tanstack/react-query';
import { cookies } from 'next/headers';

export default async function MovieTalkPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('tokens');
  // const { data } = useQuery(['movie-talk'], () => {});
  return <></>;
}
