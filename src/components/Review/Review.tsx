'use client';

import { IReviewPage } from '@/interface/review';
import { getReview } from '@/service/review';
import { useQuery } from '@tanstack/react-query';
type Props = {
  reviewId: number;
};

export default function Review({ reviewId }: Props) {
  const { data: review } = useQuery<IReviewPage>(['review', reviewId], () =>
    getReview(reviewId)
  );
  return <div>{review?.movie.title}</div>;
}
