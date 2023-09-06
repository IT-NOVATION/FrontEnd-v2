import MovieSearchResult from '@/components/SearchResult/MovieSearchResult/MovieSearchResult';
import getQueryClient from '@/service/queryClient';
import { getMovieSearchResult } from '@/service/search';
import { Hydrate, dehydrate } from '@tanstack/react-query';

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
  await queryClient.prefetchQuery(['search', 'movie', decodedValue], () =>
    getMovieSearchResult(`movieNm=${decodedValue}`)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <Hydrate state={dehydratedState}>
        <MovieSearchResult value={decodedValue} />
      </Hydrate>
    </div>
  );
}
