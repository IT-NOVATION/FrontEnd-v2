'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { IMovieSearchMovies } from '@/interface/movieSearch';
import { getMovieSearch } from '@/service/movieSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import MovieSearchGroup from './MovieSearchGroup/MovieSearchGroup';

export type MovieSearchOrder = 'reviews' | 'star' | 'releaseDate';

const orders: { name: string; type: MovieSearchOrder }[] = [
  { name: '리뷰 수', type: 'reviews' },
  { name: '평점', type: 'star' },
  { name: '개봉일자', type: 'releaseDate' },
];

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
  const handleClick = (type: MovieSearchOrder) => {
    setOrder(type);
  };
  return (
    <section className="w-full flex flex-col">
      <ul className="flex gap-[60px] mb-[30px]">
        {orders.map(({ name, type }) => (
          <li key={type}>
            <button
              onClick={() => handleClick(type)}
              className={`text-theme-lightBlack  text-[20px] font-[400] pb-[6px] ${
                order === type && 'border-b border-b-theme-main text-theme-main'
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
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
