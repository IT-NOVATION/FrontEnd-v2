'use client';

import { ISingleMovie } from '@/interface/movie';
import { getMovieInfo } from '@/service/movie';
import { useQuery } from '@tanstack/react-query';
import MovieInfo from './MovieInfo/MovieInfo';

type Props = {
  movieId: number;
};
export default function Movie({ movieId }: Props) {
  const { data } = useQuery<ISingleMovie>(['movie', `${movieId}`], () =>
    getMovieInfo(movieId)
  );
  return (
    <>
      {data && data.loginUserInfoDto && (
        <MovieInfo
          movie={data.movie}
          pushedMovieLike={data.loginUserInfoDto.pushedMovieLike}
        />
      )}
    </>
  );
}
