'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { IMovieSearchMovies } from '@/interface/movieSearch';
import { getMovieSearch } from '@/service/movieSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import MovieSearchGroup from './MovieSearchGroup/MovieSearchGroup';

export type MovieSearchOrder = 'reviews' | 'star' | 'releaseDate';

export default function MovieSearch() {
  const [order, setOrder] = useState<MovieSearchOrder>('reviews');
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useInfiniteQuery<IMovieSearchMovies>({
      queryKey: ['movieSearch', `${order}`],
      queryFn: ({ pageParam = 1 }) => getMovieSearch(order, pageParam),
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
