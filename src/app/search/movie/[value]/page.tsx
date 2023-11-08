import MovieSearchResult from '@/components/SearchResult/MovieSearchResult/MovieSearchResult';
import getQueryClient from '@/service/queryClient';
import { getMovieSearchResult } from '@/service/search';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    value: string;
  };
};

export default async function MovieSearchResultPage({
  params: { value },
}: Props) {
  const decodedValue = decodeURI(value);
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['search', 'movie', decodedValue],
    queryFn: () => getMovieSearchResult(`movieNm=${decodedValue}`),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <MovieSearchResult value={decodedValue} />
      </HydrationBoundary>
    </div>
  );
}
