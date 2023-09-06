'use client';

import { getMovieSearchResult } from '@/service/search';
import { useQuery } from '@tanstack/react-query';
import ResultCount from '../ResultCount/ResultCount';
import { IMovieResult } from '@/interface/movie';
import Movies from './Movies/Movies';

type Props = {
  value: string;
};

export default function MovieSearchResult({ value }: Props) {
  const { data } = useQuery<IMovieResult>(['search', 'movie', value], () =>
    getMovieSearchResult(`movieNm=${value}`)
  );
  return (
    <div>
      {data && (
        <>
          <ResultCount value={value} resultCount={data?.totalSize} />
          <Movies movies={data.movieSearchResult} />
        </>
      )}
    </div>
  );
}
