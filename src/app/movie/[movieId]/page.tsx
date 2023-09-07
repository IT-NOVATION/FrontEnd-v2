import Movie from '@/components/Movie/Movie';
import { IMoviepage } from '@/interface/movie';
import { getMovieInfo } from '@/service/movie';
import getQueryClient from '@/service/queryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

type Props = {
  params: {
    movieId: number;
  };
};

export async function generateMetadata({
  params: { movieId },
}: Props): Promise<Metadata> {
  const data: Promise<IMoviepage> = getMovieInfo(movieId);
  return {
    title: `${(await data).movie.title}`,
    description: `영화 | ${(await data).movie.title}`,
    openGraph: {
      images: [`${(await data).movie.movieImg}`],
    },
  };
}

export default async function MoviePage({ params: { movieId } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<IMoviepage>(['movie', `${movieId}`], () =>
    getMovieInfo(movieId)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[100vw] flex flex-col pt-[90px]">
      <Hydrate state={dehydratedState}>
        <Movie movieId={movieId} />
      </Hydrate>
    </div>
  );
}
