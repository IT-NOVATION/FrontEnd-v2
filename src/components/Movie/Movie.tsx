'use client';

import { IMoviepage } from '@/interface/movie';
import { getMovieInfo } from '@/service/movie';
import { useQuery } from '@tanstack/react-query';
import MovieInfo from './MovieInfo/MovieInfo';
import Rate from './Rate/Rate';
import ReviewPreviews from './ReviewPreviews/ReviewPreviews';

type Props = {
  movieId: number;
};
export default function Movie({ movieId }: Props) {
  const { data } = useQuery<IMoviepage>({
    queryKey: ['movie', `${movieId}`],
    queryFn: () => getMovieInfo(movieId),
  });
  return (
    <>
      {data && data.loginUserInfoDto && (
        <MovieInfo
          movie={data.movie}
          pushedMovieLike={data.loginUserInfoDto.pushedMovieLike}
        />
      )}
      {data?.reviewAndUserInfoList && (
        <section className="w-[100vw] flex justify-center mt-[40px]">
          <p className="text-black text-title4 w-[882px]">
            {` 리뷰 (${data?.reviewAndUserInfoList.length}개)`}
          </p>
        </section>
      )}
      {data?.loginUserInfoDto && (
        <Rate prevScore={data?.loginUserInfoDto.movieStar} />
      )}
      {data?.reviewAndUserInfoList && (
        <ReviewPreviews reviewsAndUsers={data.reviewAndUserInfoList} />
      )}
    </>
  );
}
