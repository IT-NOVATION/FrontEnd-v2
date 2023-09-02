'use client';

import { IReviewLikeUser } from '@/interface/user';
import { getLikeInfo, mutateReviewLike } from '@/service/review';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import LikeButton from './LikeButton/LikeButton';
import MoreButton from './MoreButton/MoreButton';

type Props = {
  pushedReviewLike: boolean;
  reviewId: number;
};

export default function LikeInfo({ pushedReviewLike, reviewId }: Props) {
  const { data: likeInfo } = useQuery<IReviewLikeUser[]>(
    ['reviewLikeInfo', reviewId],
    () => getLikeInfo(reviewId)
  );

  return (
    <section className="flex w-full justify-center items-center">
      {likeInfo && (
        <>
          <div className="relative w-[131px] h-[45px] rounded-[80px]">
            <LikeButton
              pushed={pushedReviewLike}
              likeCount={likeInfo.length}
              reviewId={reviewId}
            />
            <MoreButton likeInfo={likeInfo} />
          </div>
        </>
      )}
    </section>
  );
}
