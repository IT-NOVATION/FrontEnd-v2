import { IReviewPreview } from '@/interface/review';
import ReviewPreview from './ReviewPreview/ReviewPreview';

type Props = {
  reviews: IReviewPreview[];
};

export default function ReviewPreviews({ reviews }: Props) {
  return (
    <ul className="w-[810px] grid grid-rows-3 py-[35px] ml-[50px]">
      {reviews.map((review, idx) => (
        <ReviewPreview
          key={review.reviewId}
          review={review}
          isLast={idx === reviews.length - 1}
          isTodayBest={idx === 0}
        />
      ))}
    </ul>
  );
}
