'use client';

import Image from 'next/image';
import { IMovieSearchMovie } from '@/interface/movieSearch';
import Link from 'next/link';
import MainStarIcon from '@/ui/icons/MainStarIcon';

type Props = {
  movie: IMovieSearchMovie;
  rank: number;
};
export default function MovieSearchMovie({ movie, rank }: Props) {
  return (
    <Link href={`/movie/${movie.movieId}`}>
      <div className="w-[205px] relative mb-[5px] hover:scale-[102%]">
        <div className="shadow-xl">
          <Image
            src={movie.movieImg}
            alt={`${movie.movieTitle} 포스터`}
            width={205}
            height={292}
            className="w-[205px] h-[292px] rounded-[10px]"
          />
        </div>
        {rank < 10 && (
          <div className="absolute top-0 left-0 w-[23.3px] h-[23.3px] bg-[#0000009b] flex justify-center items-center rounded-tl-[10px]">
            <p className="text-white font-[400] text-[18px]">{rank}</p>
          </div>
        )}
        <div className="mt-[8px] text-center truncate">
          <p className="w-full text-title5 truncate">{movie.movieTitle}</p>
          <div className="flex gap-[35px] mt-[2px] items-center justify-center">
            <p className="flex items-center">
              <MainStarIcon />
              <span className="text-body3 ml-[5px]">
                평점 {movie.starScore.toFixed(1)}
              </span>
            </p>
            <span className="text-body3">리뷰 {movie.reviewCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
