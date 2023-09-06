import ReviewPreview from '@/components/Main/ReviewTime/ReviewTimeContainer/ReviewTimeBox/ReviewPreviews/ReviewPreview/ReviewPreview';
import { IReviewPreview } from '@/interface/review';

type Props = {
  reviews: IReviewPreview[];
};

export default function Reviews({ reviews }: Props) {
  return (
    <ul className="w-full flex flex-col">
      {!reviews.length && (
        <h2 className="text-body5 text-center">작성한 리뷰가 없습니다.</h2>
      )}
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
