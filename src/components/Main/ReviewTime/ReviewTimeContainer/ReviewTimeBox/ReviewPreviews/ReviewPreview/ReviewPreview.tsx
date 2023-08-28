import { IReviewPreview } from '@/interface/review';
import MovieInfo from './MovieInfo/MovieInfo';
import Link from 'next/link';
import SmallStarFillIcon from '@/ui/icons/SmallStarFillIcon';
import cutReviewText from '@/utils/cutReviewText';
import SmallHeartFillIcon from '@/ui/icons/SmallHeartFillIcon';
import CommentIcon from '@/ui/icons/CommentIcon';

type Props = {
  review: IReviewPreview;
  isLast: boolean;
  isTodayBest: boolean;
};

export default function ReviewPreview({ review, isLast, isTodayBest }: Props) {
  return (
    <li
      className={`w-full h-[160px] pb-[20px] flex gap-[23.4px] ${
        !isLast && 'border-b-[0.7px] border-theme-gray'
      } `}
    >
      <MovieInfo movie={review.movie} />
      <section className="w-full flex flex-col h-full justify-between">
        <div className="flex items-center">
          {isTodayBest && (
            <div className="w-[87px] h-[27px] rounded-[13px] border border-theme-main flex justify-center items-center text-theme-main text-body5 mr-[9px]">
              TODAY BEST
            </div>
          )}
          <Link href={`/review/${review.reviewId}`}>
            <p className="text-theme-lightBlack text-title5 hover:underline">
              {review.reviewTitle}
            </p>
          </Link>
          <div className="w-[56px] h-[27px] rounded-[16.5px] border-[0.7px] border-theme-gray flex items-center justify-center gap-[3px] ml-[16px]">
            <SmallStarFillIcon />
            <span className="text-body5">{review.star.toFixed(1)}</span>
          </div>
        </div>
        <div
          className={`relative w-full mt-[5px] text-theme-lightBlack text-body4 leading-tight h-[60px] pointer-events-none select-none`}
        >
          <p className={`${review.hasSpoiler && 'blur-[5px]'}`}>
            {cutReviewText(review.reviewMainText)}
          </p>
          {review.hasSpoiler && (
            <div className="absolute left-[280px] top-[20px] z-20 blur-none text-theme-main ">
              스포일러 포함
            </div>
          )}
        </div>
        <div className="mt-[5px] flex gap-[12px] text-theme-lightBlack text-body5">
          <div>{review.createdDate}</div>
          <div className="flex gap-[3px]">
            <SmallHeartFillIcon />
            <span>{review.reviewLikeCount}</span>
          </div>
          <div className="flex gap-[3px]">
            <CommentIcon />
            <span>{review.commentCount}</span>
          </div>
        </div>
      </section>
    </li>
  );
}
