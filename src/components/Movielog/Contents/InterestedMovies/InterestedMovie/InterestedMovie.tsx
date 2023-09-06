import useHovered from '@/hooks/useHovered';
import { IInterestedMovie } from '@/interface/movie';
import Image from 'next/image';
import MovieInfo from './MovieInfo/MovieInfo';

type Props = {
  movie: IInterestedMovie;
};

export default function InterestedMovie({ movie }: Props) {
  const { isHovered, handleHover, handleLeave } = useHovered();
  return (
    <li
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`relative w-[260px] h-[331px] rounded-[12px] flex flex-col`}
    >
      <Image
        src={movie.movieImg}
        alt="포스터"
        fill
        className={`top-0 left-0 w-[260px] h-[331px] rounded-[12px]  ${
          isHovered && 'bg-[#000000b1]'
        }`}
      />
      {isHovered && <MovieInfo movie={movie} />}
    </li>
  );
}
