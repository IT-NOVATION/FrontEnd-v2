import { IReviewPreview } from '@/interface/movie';
import CommentIcon from '@/ui/icons/CommentIcon';
import SmallHeartFillIcon from '@/ui/icons/SmallHeartFillIcon';
import SmallStarFillIcon from '@/ui/icons/SmallStarFillIcon';
import cutReviewText from '@/utils/cutReviewText';
import Link from 'next/link';

type Props = {
  review: IReviewPreview;
};

export default function ReviewInfoBox({ review }: Props) {
  return (
    <section className="flex flex-col w-[719px] h-full justify-between">
      <div className="flex gap-[8px] ">
        <Link href={`/review/${review.reviewId}`}>
          <p className="text-theme-lightBlack text-title5 hover:underline underline-offset-1">
            {review.reviewTitle}
          </p>
        </Link>
        <div className="w-[56px] h-[27px] rounded-[16.5px] border-[0.7px] border-theme-gray flex items-center justify-center gap-[3px]">
          <SmallStarFillIcon />
          <span className="text-body5">{review.starScore?.toFixed(1)}</span>
        </div>
      </div>
      <div
        className={`relative mt-[5px] text-theme-lightBlack text-body4 leading-tight h-[60px] pointer-events-none select-none`}
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
  );
}
