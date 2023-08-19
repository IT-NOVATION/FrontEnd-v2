'use client';

import { IMovieSearchMovies } from '@/interface/movieSearch';
import { getMovieSearchReviewOrder } from '@/service/movieSearch';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function MovieSearch() {
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useInfiniteQuery<IMovieSearchMovies>({
      queryKey: ['movieSearch'],
      queryFn: ({ pageParam = 1 }) => getMovieSearchReviewOrder(pageParam),
      getNextPageParam: ({ nowPage, lastPage }) => {
        if (nowPage === lastPage) {
          return false;
        }
        return nowPage + 1;
      },
    });
  return (
    <section className="grid grid-cols-4 gap-5">
      {data &&
        data.pages[0].moiveSearchDtoList.map((movie) => (
          <div key={movie.movieTitle}>{movie.movieTitle}</div>
        ))}
    </section>
  );
}
