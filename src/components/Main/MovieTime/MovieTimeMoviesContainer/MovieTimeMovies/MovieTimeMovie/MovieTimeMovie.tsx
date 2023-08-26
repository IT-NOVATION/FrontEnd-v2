import { IMovieTimeMovie } from '@/interface/movieTime';
import Image from 'next/image';

type Props = {
  movie: IMovieTimeMovie;
  rank: number;
};

export default function MovieTimeMovie({ movie, rank }: Props) {
  return (
    <>
      <Image
        loading="eager"
        alt="포스터"
        src={movie.movieImg}
        fill
        className="rounded-[10px] "
      />
      <div className="absolute top-0 left-0 flex items-center justify-center text-white w-[23px] h-[23px] bg-[#0000009b] rounded-tl-[10px]">
        {rank}
      </div>
    </>
  );
}
