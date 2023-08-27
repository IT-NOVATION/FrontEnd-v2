'use client';

import { IMovieTime } from '@/interface/movieTime';
import { getMovieTime } from '@/service/movieTime';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import MovieTimeMovies from './MovieTimeMovies/MovieTimeMovies';
import LeftArrowIcon from '@/ui/icons/LeftArrowIcon';
import RightArrowIcon from '@/ui/icons/RightArrowIcon';
import useSliderAnimation from '@/hooks/useSliderAnimation';

export type ContentsType = 'popular' | 'recommended';

export default function MovieTimeMoviesContainer() {
  const { data } = useQuery<IMovieTime>(['movieTime'], getMovieTime);
  const [contentsType, setContentsType] = useState<ContentsType>('popular');

  const handleContentClick = (selected: ContentsType) => {
    setContentsType(selected);
    setAnimate(false);
    setPage([0, 0]);
  };
  const {
    variants,
    page,
    direction,
    animate,
    handleNextClick,
    handlePrevClick,
    setAnimate,
    setPage,
  } = useSliderAnimation();
  return (
    <div>
      <div className="flex justify-center gap-[90px] my-[40px]">
        <button
          onClick={() => handleContentClick('popular')}
          className={`text-theme-lightBlack text-body1 ${
            contentsType === 'popular' && 'border-b border-black'
          }`}
        >
          무비타임 인기
        </button>
        <button
          onClick={() => handleContentClick('recommended')}
          className={`text-theme-lightBlack text-body1 ${
            contentsType === 'recommended' && 'border-b border-black'
          }`}
        >
          무비타임 추천
        </button>
      </div>
      <div className="relative">
        <button
          onClick={handlePrevClick}
          className="absolute top-[110px] left-[-50px]"
        >
          <LeftArrowIcon />
        </button>
        {data && (
          <MovieTimeMovies
            direction={direction}
            animate={animate}
            movies={
              contentsType === 'popular' ? data?.popular : data?.recommended
            }
            page={page}
          />
        )}
        <button
          onClick={handleNextClick}
          className="absolute top-[105px] right-[-50px]"
        >
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
}
