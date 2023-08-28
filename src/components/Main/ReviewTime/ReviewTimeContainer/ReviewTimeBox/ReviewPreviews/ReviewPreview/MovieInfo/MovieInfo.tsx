import { ISimpleMovie } from '@/interface/movie';
import Image from 'next/image';

type Props = {
  movie: ISimpleMovie;
};

export default function MovieInfo({ movie }: Props) {
  const { movieId, movieImg } = movie;
  return (
    <section>
      {movie && (
        <Image
          src={movieImg}
          alt="포스터"
          width={100}
          height={150}
          className="w-[98px] h-[140px]"
        />
      )}
    </section>
  );
}
