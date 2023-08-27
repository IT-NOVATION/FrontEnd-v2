import ReviewPreview from '@/components/Movie/ReviewPreviews/ReviewPreview/ReviewPreview';
import { IReviewAndUserInfo } from '@/interface/movie';

type Props = {
  reviewsAndUsers: IReviewAndUserInfo[];
};
export default function ReviewPreviews({ reviewsAndUsers }: Props) {
  return (
    <section className="w-[100vw] flex justify-center">
      <div className="w-[882px] flex flex-col justify-center ">
        {reviewsAndUsers.map((reviewAndUser, idx) => (
          <ReviewPreview
            reviewAndUser={reviewAndUser}
            isLast={idx === reviewsAndUsers.length - 1}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}
