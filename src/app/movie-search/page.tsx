import MovieSearch from '@/components/MovieSearch/MovieSearch';
import { getMovieSearchReviewOrder } from '@/service/movieSearch';
import getQueryClient from '@/service/queryClient';
import { dehydrate, useQuery, Hydrate } from '@tanstack/react-query';

export default async function MovieSearchPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(['movieSearch'], () =>
    getMovieSearchReviewOrder(1)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <h1>ddd</h1>
      <Hydrate state={dehydratedState}>
        <MovieSearch />
      </Hydrate>
    </div>
  );
}
