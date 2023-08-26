'use client';

import { IMovieInformation } from '@/interface/movie';
import Image from 'next/image';
import MovieLikeBtn from './MovieLikeBtn/MovieLikeBtn';
import StarIcon from '@/ui/icons/StarIcon';
import { translateKeyword } from '../../../utils/translateKeyword';
import useHovered from '@/hooks/useHovered';

type Props = {
  movie: IMovieInformation;
  pushedMovieLike: boolean;
};

export default function MovieInfo({ movie, pushedMovieLike }: Props) {
  const movieDetails = [
    { name: '장르', content: movie.movieGenre },
    {
      name: '개요',
      content: movie.movieRunningTime,
    },
    {
      name: '개봉',
      content: movie.movieReleasedDate,
    },
    {
      name: '감독',
      content: movie.movieDirector,
    },
    {
      name: '출연',
      content: movie.movieActor.join(', '),
    },
  ];
  const { isHovered, handleHover, handleLeave } = useHovered();
  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="w-[100vw] h-[450px] flex justify-center bg-black "
      >
        <div className="relative w-[1250px] h-[450px] flex items-center px-[70px] ">
          <Image
            alt="배경포스터"
            src={movie.movieBgImg}
            width={1250}
            height={450}
            className="absolute left-0 top-0 opacity-30 w-[1250px] h-[450px] z-0 object-cover"
          />
          <section className="flex gap-[35px]  ">
            <Image
              alt="포스터"
              src={movie.movieImg}
              width={272}
              height={389}
              className="w-[272px] h-[389px] border border-white z-20"
            />
            <div className="flex flex-col justify-between opacity-100 z-20">
              <div className="flex flex-col gap-[8px]">
                <p className="text-title1 leading-none text-white">
                  {movie.title}
                </p>
                <div className="flex gap-[8px]">
                  <MovieLikeBtn
                    liked={pushedMovieLike}
                    likeCount={movie.movieLikeCount}
                  />
                  <button
                    className={`w-[91px] h-[29px] rounded-[5px] border border-white
                    flex gap-[4px] items-center justify-center`}
                  >
                    <StarIcon />
                    <span className={`text-white mt-[1px]  text-body3`}>
                      {movie.avgStarScore.toFixed(1)} 점
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-[20px] relative ">
                <div className="flex flex-col gap-x-[19px] gap-y-[5px] border-l border-white pl-[13px]">
                  {movieDetails.map(({ name, content }) => (
                    <div
                      key={name}
                      className="flex gap-[25px] text-white text-body4"
                    >
                      <p>{name}</p>
                      <p className=" max-w-[400px] flex-wrap">{content}</p>
                    </div>
                  ))}
                </div>
                <ul className="text-theme-gray text-body4 flex gap-[12px]">
                  {movie.top3HasFeature.topKeywordList.map((keyword, idx) => (
                    <ul key={idx}># {translateKeyword(keyword)}</ul>
                  ))}
                </ul>
                {isHovered && (
                  <section className="absolute right-[-400px] z-20 bottom-[40px] w-[300px] h-[136px] flex items-center rounded-[20px] border border-[#ffffff68] ">
                    <p className="overflow-scroll h-[120px] p-[10px] text-body4 text-white mb-[10px]">
                      {movie.movieDetail}
                    </p>
                  </section>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
