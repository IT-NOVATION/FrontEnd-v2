'use client';

import { IReviewPage } from '@/interface/review';
import { getReview } from '@/service/review';
import { useQuery } from '@tanstack/react-query';
import ReviewInfo from './ReviewInfo/ReviewInfo';
import LikeInfo from './LikeInfo/LikeInfo';
import CommentsArea from './CommentsArea/CommentsArea';
import AuthorInfo from './AuthorInfo/AuthorInfo';
type Props = {
  reviewId: number;
};

export default function Review({ reviewId }: Props) {
  const { data } = useQuery<IReviewPage>({
    queryKey: ['review', reviewId],
    queryFn: () => getReview(reviewId),
  });
  console.log(data);
  return (
    <div className="w-[100vw] flex flex-col items-center">
      {data && (
        <>
          <div className="w-[900px] flex flex-col">
            <ReviewInfo reviewData={data} />
            <LikeInfo
              pushedReviewLike={data.loginUser.pushedReviewLike}
              reviewId={reviewId}
            />
            <CommentsArea reviewId={reviewId} />
          </div>
          <AuthorInfo
            author={data.user}
            isLoginUserFollowing={data.loginUser.isLoginUserFollowing}
          />
        </>
      )}
    </div>
  );
}
