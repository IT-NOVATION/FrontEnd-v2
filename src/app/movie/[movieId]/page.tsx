import Movie from '@/components/Movie/Movie';
import { ISingleMovie } from '@/interface/movie';
import { getMovieInfo } from '@/service/movie';
import getQueryClient from '@/service/queryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';

type Props = {
  params: {
    movieId: number;
  };
};

export default async function MoviePage({ params: { movieId } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<ISingleMovie>(['movie', `${movieId}`], () =>
    getMovieInfo(movieId)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[900px] flex flex-col pt-[90px]">
      <Hydrate state={dehydratedState}>
        <Movie movieId={movieId} />
      </Hydrate>
    </div>
  );
}
