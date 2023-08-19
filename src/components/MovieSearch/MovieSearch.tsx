'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { IMovieSearchMovies } from '@/interface/movieSearch';
import { getMovieSearchReviewOrder } from '@/service/movieSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import MovieSearchGroup from './MovieSearchGroup/MovieSearchGroup';

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
    <section className="w-full">
      {data &&
        data.pages.map((result) => (
          <MovieSearchGroup
            key={result.nowPage}
            pageNum={result.nowPage}
            result={result}
          />
        ))}
      <div ref={getMoreMovies} />
    </section>
  );
}
