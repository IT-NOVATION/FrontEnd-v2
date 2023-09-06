import useCalcStar from '@/hooks/useCalcStar';
import useLoginState from '@/hooks/useLoginState';
import { IInterestedMovie } from '@/interface/movie';
import SmMainHalfStarIcon from '@/ui/icons/SmMainHalfStarIcon';
import SmMainStarIcon from '@/ui/icons/SmMainStarIcon';
import { cutMovieTitleText } from '@/utils/cutMovieTitleText';
import { usePathname } from 'next/navigation';
import MinusBtn from './MinusBtn/MinusBtn';

type Props = { movie: IInterestedMovie };

export default function MovieInfo({ movie }: Props) {
  const { movieId, movieImg, title, star, hasReviewdByLoginedUser, reviewId } =
    movie;
  const { fullStar, halfStar } = useCalcStar(star);
  const {
    state: { userId: loginUserId },
  } = useLoginState();
  const pathname = usePathname();
  const isMyProfile = pathname.split('/')[2] === `${loginUserId}`;
  return (
    <div className="w-full h-full py-[30px] rounded-[12px] absolute top-0 left-0 bg-[#000000af] flex flex-col justify-between">
      <div>
        <h2 className="text-[#f9f9f9] text-[28px] font-[500] ml-[30px]">
          {cutMovieTitleText(title)}
        </h2>
        <div className="ml-[30px] flex gap-[2px]">
          <ul className="flex gap-[2px]">
            {fullStar.map((_, idx) => (
              <SmMainStarIcon key={idx} />
            ))}
          </ul>
          <ul className="flex gap-[2px]">
            {halfStar.map((_, idx) => (
              <SmMainHalfStarIcon key={idx} />
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full px-[22px] justify-between">
        <div>
          {loginUserId && isMyProfile && (
            <MinusBtn movieId={movieId} userId={+loginUserId} />
          )}
        </div>
      </div>
    </div>
  );
}
