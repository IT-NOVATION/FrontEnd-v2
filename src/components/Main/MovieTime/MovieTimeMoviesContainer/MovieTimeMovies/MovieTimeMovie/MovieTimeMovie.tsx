import useHovered from '@/hooks/useHovered';
import { IMovieTimeMovie } from '@/interface/movieTime';
import GoldSmallStarIcon from '@/ui/icons/GoldSmallStarIcon';
import Image from 'next/image';
import { cutMovieTitleText } from '@/utils/cutMovieTitleText';
import Link from 'next/link';

type Props = {
  movie: IMovieTimeMovie;
  rank?: number;
};

export default function MovieTimeMovie({ movie, rank }: Props) {
  const { isHovered, handleHover, handleLeave } = useHovered();
  return (
    <li
      className="relative w-[205px] h-[292px] rounded-[10px]"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Image
        alt="포스터"
        src={movie.movieImg}
        fill
        priority={true}
        className="rounded-[10px]"
      />
      {rank && (
        <div className="absolute top-0 left-0 flex items-center justify-center text-white w-[23px] h-[23px] bg-[#0000009b] rounded-tl-[10px]">
          {rank}
        </div>
      )}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full rounded-[10px] bg-theme-bgColor flex flex-col items-center pt-[36px] text-white">
          <p className="text-[24px] font-[400]">
            {cutMovieTitleText(movie.movieTitle)}
          </p>
          <div className="w-[109px] h-[29px] mt-[19px] rounded-[5px] border border-white flex items-center justify-center gap-[2px] text-body3">
            <span>평점</span>
            <GoldSmallStarIcon />
            <span>{movie.starScore.toFixed(1)}</span>
          </div>
          <Link href={`/movie/${movie.movieId}`}>
            <button className="w-[137px] h-[57px] mt-[80px] rounded-[15px] backdrop-blur-[5px] bg-[#f9f9f933] text-white text-title5">
              상세정보
            </button>
          </Link>
        </div>
      )}
    </li>
  );
}
