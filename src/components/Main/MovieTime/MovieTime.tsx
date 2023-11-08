import { IMovieTime } from '@/interface/movieTime';
import { getMovieTime } from '@/service/movieTime';
import getQueryClient from '@/service/queryClient';
import ColorEllipseIcon from '@/ui/icons/ColorEllipseIcon';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import MovieTimeMoviesContainer from './MovieTimeMoviesContainer/MovieTimeMoviesContainer';

export default async function MovieTime() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<IMovieTime>({
    queryKey: ['movieTime'],
    queryFn: getMovieTime,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <section className="mt-[60px] w-full flex flex-col items-center">
      <div className="relative z-2">
        <ColorEllipseIcon className="absolute top-[-65px] right-[-65px] z-[-1]" />
        <h1 className="text-[50px] font-400 text-theme-lightBlack [text-shadow:_2px_2px_4px_rgb(0_0_0_/_25%)]">
          MOVIE TIME
        </h1>
      </div>
      <HydrationBoundary state={dehydratedState}>
        <MovieTimeMoviesContainer />
      </HydrationBoundary>
    </section>
  );
}
