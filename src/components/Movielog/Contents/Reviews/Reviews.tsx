import ReviewPreview from '@/components/Main/ReviewTime/ReviewTimeContainer/ReviewTimeBox/ReviewPreviews/ReviewPreview/ReviewPreview';
import { IReviewPreview } from '@/interface/review';

type Props = {
  reviews: IReviewPreview[];
};

export default function Reviews({ reviews }: Props) {
  return (
    <ul className="w-full flex flex-col">
      {reviews.map((review, idx) => (
        <ReviewPreview
          key={review.reviewId}
          review={review}
          isLast={idx === reviews.length - 1}
        />
      ))}
    </ul>
  );
}
