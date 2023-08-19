import Image from 'next/image';
import { IMovieSearchMovie } from '@/interface/movieSearch';
import Link from 'next/link';

type Props = {
  movie: IMovieSearchMovie;
  rank: number;
};
export default function MovieSearchMovie({ movie, rank }: Props) {
  const handleClick = () => {};
  return (
    <Link href={`/movie/${movie.movieId}`}>
      <div className="w-[205px] h-[292px] relative">
        <Image
          src={movie.movieImg}
          alt={`${movie.movieTitle} 포스터`}
          objectFit="cover"
          width={205}
          height={292}
          className="w-[205px] h-[292px] rounded-[10px] shadow-[2px_6px_30px_0_rgb(204, 204, 204)]"
        />
        {rank < 10 && (
          <div className="absolute top-0 left-0 w-[23.3px] h-[23.3px] bg-[#0000009b] flex justify-center items-center rounded-tl-[10px]">
            <p className="text-white font-[400] text-[18px]">{rank}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
