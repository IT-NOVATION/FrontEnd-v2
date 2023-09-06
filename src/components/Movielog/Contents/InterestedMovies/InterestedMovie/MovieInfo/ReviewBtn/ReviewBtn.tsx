import useLoginState from '@/hooks/useLoginState';
import { useRouter } from 'next/navigation';

type Props = {
  movieId: number;
  hasReviewed: boolean;
  reviewId?: number;
};

export default function ReviewBtn({ movieId, hasReviewed, reviewId }: Props) {
  const router = useRouter();
  const { checkAuth } = useLoginState();
  const handleClick = () => {
    if (hasReviewed) {
      router.push(`/review/${reviewId}`);
    } else {
      if (checkAuth()) {
        router.push(`/write-review/${movieId}`);
      }
    }
  };
  return (
    <button
      onClick={handleClick}
      className="w-[150px] h-[57px] rounded-[15px] bg-theme-main flex justify-center items-center text-body1 text-white"
    >
      {hasReviewed ? 'MY 리뷰' : '리뷰 쓰기'}
    </button>
  );
}
