import MovieTimeMovie from '@/components/Main/MovieTime/MovieTimeMoviesContainer/MovieTimeMovies/MovieTimeMovie/MovieTimeMovie';
import { IMovieTimeMovie } from '@/interface/movieTime';

type Props = {
  movies: IMovieTimeMovie[];
};

export default function Movies({ movies }: Props) {
  return (
    <ul className="w-full mt-[50px] grid grid-cols-3 place-items-center gap-y-[40px] mb-[100px]">
      {movies.map((movie) => (
        <MovieTimeMovie key={movie.movieId} movie={movie} />
      ))}
    </ul>
  );
}
