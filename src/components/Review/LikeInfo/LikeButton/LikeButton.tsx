import useLoginState from '@/hooks/useLoginState';
import { mutateReviewLike } from '@/service/review';
import WhiteHeartFillIcon from '@/ui/icons/WhiteHeartFillIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  pushed: boolean;
  likeCount: number;
  reviewId: number;
};

export default function LikeButton({ pushed, likeCount, reviewId }: Props) {
  const queryClient = useQueryClient();
  const { checkAuth } = useLoginState();

  const { mutateAsync: mutateLike } = useMutation({
    mutationFn: (data: { reviewId: number }) => mutateReviewLike(data),
  });
  const handleLikeClick = async () => {
    checkAuth();
    const data = { reviewId };
    await mutateLike(data);
    await queryClient.invalidateQueries({ queryKey: ['review', reviewId] });
    await queryClient.invalidateQueries({
      queryKey: ['reviewLikeInfo', reviewId],
    });
  };
  return (
    <button
      onClick={handleLikeClick}
      className={` w-[131px] h-[45px] rounded-[80px] flex items-center justify-center gap-[7px] ${
        pushed
          ? 'border-[0.7px] border-theme-main text-theme-main'
          : 'bg-theme-main text-white'
      }`}
    >
      <WhiteHeartFillIcon />
      <p>{pushed ? likeCount : 'Like'}</p>
    </button>
  );
}
