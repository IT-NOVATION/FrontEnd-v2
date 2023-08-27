import { IMovieSearchMovies } from '@/interface/movieSearch';
import MovieSearchMovie from './MovieSearchMovie/MovieSearchMovie';
import { Suspense } from 'react';

type Props = {
  result: IMovieSearchMovies;
  pageNum: number;
};
export default function MovieSearchGroup({ result, pageNum }: Props) {
  return (
    <div className=" grid grid-cols-4 place-items-center gap-x-[35px] gap-y-[22px] mb-[22px]">
      {result.movies.map((movie, idx) => (
        <MovieSearchMovie
          key={idx}
          rank={(pageNum - 1) * 16 + idx + 1}
          movie={movie}
        />
      ))}
    </div>
  );
}
