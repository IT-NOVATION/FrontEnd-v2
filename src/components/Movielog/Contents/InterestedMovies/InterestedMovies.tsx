import { IInterestedMovie } from '@/interface/movie';
import ButtonBox from './ButtonBox/ButtonBox';
import KeyboardArrowLeftIcon from '@/ui/icons/KeyboardLeftArrowIcon';
import KeyboardRightArrowIcon from '@/ui/icons/KeyboardRightArrowIcon';
import { useState } from 'react';
import InterestedMovie from './InterestedMovie/InterestedMovie';

type Props = {
  movies: IInterestedMovie[];
};

export default function InterestedMovies({ movies }: Props) {
  const [page, setPage] = useState(0);
  const hasPrevPage = 0 < page;
  const hasNextPage = movies.length > page * 3 + 3;
  const handleLeftArrowClick = () => {
    setPage((prev) => prev - 1);
  };
  const handleRightArrowClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="relative w-full">
      {!movies.length && (
        <h2 className="text-body5 text-center">등록된 관심 영화가 없습니다.</h2>
      )}
      {hasPrevPage && (
        <ButtonBox
          onClick={handleLeftArrowClick}
          className="absolute left-[-50px] top-[150px]"
        >
          <KeyboardArrowLeftIcon />
        </ButtonBox>
      )}
      <ul className="w-full grid grid-cols-3">
        {movies.slice(page * 3, page * 3 + 3).map((movie) => (
          <InterestedMovie key={movie.movieId} movie={movie} />
        ))}
      </ul>
      {hasNextPage && (
        <ButtonBox
          onClick={handleRightArrowClick}
          className="absolute right-[-50px] top-[150px]"
        >
          <KeyboardRightArrowIcon />
        </ButtonBox>
      )}
    </div>
  );
}
