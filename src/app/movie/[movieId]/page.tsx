import Movie from '@/components/Movie/Movie';
import { IMoviepage } from '@/interface/movie';
import { getMovieInfo } from '@/service/movie';
import getQueryClient from '@/service/queryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

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
      title: `${(await data).movie.title}`,
      images: [`${(await data).movie.movieImg}`],
      description: `영화 | ${(await data).movie.title}`,
    },
  };
}

export default async function MoviePage({ params: { movieId } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<IMoviepage>({
    queryKey: ['movie', `${movieId}`],
    queryFn: () => getMovieInfo(movieId),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[100vw] flex flex-col pt-[90px]">
      <HydrationBoundary state={dehydratedState}>
        <Movie movieId={movieId} />
      </HydrationBoundary>
    </div>
  );
}
