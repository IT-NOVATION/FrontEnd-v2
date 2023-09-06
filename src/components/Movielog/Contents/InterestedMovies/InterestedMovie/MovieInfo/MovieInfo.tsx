import { IInterestedMovie } from '@/interface/movie';
import { cutMovieTitleText } from '@/utils/cutMovieTitleText';

type Props = { movie: IInterestedMovie };

export default function MovieInfo({ movie }: Props) {
  const { movieId, movieImg, title, star, hasReviewdByLoginedUser, reviewId } =
    movie;
  return (
    <div className="w-full h-full rounded-[12px] absolute top-0 left-0 bg-[#000000af]">
      <h2 className="text-[#f9f9f9] text-[28px] font-[500] ml-[30px] mt-[33px]">
        {cutMovieTitleText(title)}
      </h2>
    </div>
  );
}
