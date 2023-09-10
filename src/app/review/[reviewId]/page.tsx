import Review from '@/components/Review/Review';
import { IComments } from '@/interface/comments';
import { IReviewPage } from '@/interface/review';
import { IReviewLikeUser } from '@/interface/user';
import getQueryClient from '@/service/queryClient';
import { getComments, getLikeInfo, getReview } from '@/service/review';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

type Props = {
  params: {
    reviewId: number;
  };
};

export async function generateMetadata({
  params: { reviewId },
}: Props): Promise<Metadata> {
  const data: Promise<IReviewPage> = getReview(reviewId);
  return {
    title: `${(await data).review.reviewTitle}`,
    description: `${(await data).user.nickName}님의 ${
      (await data).movie.title
    }리뷰`,
    openGraph: {
      title: `${(await data).review.reviewTitle}`,
      images: [`${(await data).movie.movieImg}`],
      description: `${(await data).user.nickName}님의 ${
        (await data).movie.title
      }리뷰`,
    },
  };
}

export default async function ReviewPage({ params: { reviewId } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<IReviewPage>(['review', reviewId], () =>
    getReview(reviewId)
  );
  await queryClient.prefetchQuery<IReviewLikeUser[]>(
    ['reviewLikeInfo', reviewId],
    () => getLikeInfo(reviewId)
  );
  await queryClient.prefetchInfiniteQuery<IComments>(
    ['comments', reviewId],
    () => getComments(`reviewId=${reviewId}&page=1`)
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
