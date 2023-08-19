import MovieSearch from '@/components/MovieSearch/MovieSearch';
import { IMovieSearchMovies } from '@/interface/movieSearch';
import { getMovieSearch } from '@/service/movieSearch';
import getQueryClient from '@/service/queryClient';
import { dehydrate, useQuery, Hydrate } from '@tanstack/react-query';
import { useState } from 'react';

export default async function MovieSearchPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery<IMovieSearchMovies>(
    ['movieSearch', 'reviews'],
    () => getMovieSearch('reviews', 1)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[900px] mx-auto flex flex-col">
      <h1 className="text-[#5f5f5f] text-[64px] font-[500] mt-[15px]">
        무비서치
      </h1>
      <p className="text-title4 text-theme-lightBlack leading-[1.5] mb-[220px]">
        It’s Movie Time에서는 매주 영화 정보를 업데이트 하고있습니다.
        {'\n'}
        원하는 영화가 보이지 않는다면 상단의 검색 기능을 활용해보세요.
      </p>
      <div className="w-[100vw] h-[85px] absolute top-[300px] left-0 bg-[#f5f5f5] "></div>
      <Hydrate state={dehydratedState}>
        <MovieSearch />
      </Hydrate>
    </div>
  );
}
