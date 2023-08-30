import Review from '@/components/Review/Review';
import { IReviewPage } from '@/interface/review';
import getQueryClient from '@/service/queryClient';
import { getReview } from '@/service/review';
import { Hydrate, dehydrate } from '@tanstack/react-query';

type Props = {
  params: {
    reviewId: number;
  };
};

export default async function ReviewPage({ params: { reviewId } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<IReviewPage>(['review', reviewId], () =>
    getReview(reviewId)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="pt-[70px] flex flex-col ">
      <Hydrate state={dehydratedState}>
        <Review reviewId={reviewId} />
      </Hydrate>
    </div>
  );
}
