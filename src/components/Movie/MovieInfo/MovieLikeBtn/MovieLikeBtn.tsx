'use client';

import HeartIcon from '@/ui/icons/HeartIcon';
import HeartFillIcon from '@/ui/icons/HeartFillIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutateMovieLike } from '@/service/movie';
import { useParams } from 'next/navigation';
import useLoginState from '@/hooks/useLoginState';
type Props = {
  liked: boolean;
  likeCount: number;
};
export default function MovieLikeBtn({ liked, likeCount }: Props) {
  const queryClient = useQueryClient();
  const { checkAuth } = useLoginState();
  const { movieId } = useParams();
  const data = { movieId: Number(movieId) };
  const { mutateAsync } = useMutation({
    mutationFn: () => mutateMovieLike(data),
  });
  const handleLikeClick = async () => {
    if (!checkAuth()) {
      return;
    }
    await mutateAsync();
    await queryClient.invalidateQueries({ queryKey: ['movie', `${movieId}`] });
  };
  return (
    <button
      onClick={handleLikeClick}
      className={`w-[91px] h-[29px] rounded-[5px] border ${
        liked ? 'border-theme-main' : 'border-white'
      } flex gap-[6px] items-center justify-center`}
    >
      {liked ? <HeartFillIcon /> : <HeartIcon />}
      <span
        className={` ${
          liked ? 'text-theme-main ' : 'text-white '
        } mt-[1px]  text-body3`}
      >
        {likeCount}
      </span>
    </button>
  );
}
