'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { IMovieSearchMovies } from '@/interface/movieSearch';
import { getMovieSearchReviewOrder } from '@/service/movieSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';

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
  const getMoreMovies = useRef<HTMLDivElement>(null);
  useIntersectionObserver({
    root: null,
    target: getMoreMovies,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <section className="grid grid-cols-4 gap-5 h-[200vh]">
      {data &&
        data.pages[0].moiveSearchDtoList.map((movie) => (
          <div key={movie.movieTitle}>{movie.movieTitle}</div>
        ))}
      <div ref={getMoreMovies} />
    </section>
  );
}
