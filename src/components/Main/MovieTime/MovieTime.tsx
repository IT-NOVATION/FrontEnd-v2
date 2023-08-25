import { getMovieTime } from '@/service/movieTime';
import getQueryClient from '@/service/queryClient';
import { dehydrate } from '@tanstack/react-query';

export default async function MovieTime() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['movieSearch', 'reviews'], getMovieTime);
  const dehydratedState = dehydrate(queryClient);
  return <></>;
}
