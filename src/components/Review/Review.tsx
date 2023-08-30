'use client';

import { IReviewPage } from '@/interface/review';
import { getReview } from '@/service/review';
import { useQuery } from '@tanstack/react-query';
import ReviewInfo from './ReviewInfo/ReviewInfo';
type Props = {
  reviewId: number;
};

export default function Review({ reviewId }: Props) {
  const { data } = useQuery<IReviewPage>(['review', reviewId], () =>
    getReview(reviewId)
  );
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[900px] flex flex-col">
        {data && <ReviewInfo reviewData={data} />}
      </div>
    </div>
  );
}
