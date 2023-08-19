import { IMovieSearchMovies } from '@/interface/movieSearch';
import MovieSearchMovie from './MovieSearchMovie/MovieSearchMovie';

type Props = {
  result: IMovieSearchMovies;
  pageNum: number;
};
export default function MovieSearchGroup({ result, pageNum }: Props) {
  return (
    <div className="w-[900px] mx-auto grid grid-cols-4 place-items-center gap-x-[35px] gap-y-[22px] mb-[22px]">
      {result.movies.map((movie, idx) => (
        <MovieSearchMovie rank={(pageNum - 1) * 16 + idx + 1} movie={movie} />
      ))}
    </div>
  );
}
