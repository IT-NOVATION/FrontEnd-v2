import { IMovieSearchMovies } from '@/interface/movieSearch';

type Props = {
  result: IMovieSearchMovies;
};
export default function MovieSearchGroup({ result }: Props) {
  return (
    <div className="grid grid-cols-4 place-items-center gap-x-[35px] gap-y-[22px]">
      {result.movies.map((movie) => (
        <div key={movie.movieId}>{movie.movieTitle}</div>
      ))}
    </div>
  );
}
