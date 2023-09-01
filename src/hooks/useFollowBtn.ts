import { mutateFollow } from '@/service/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useLoginState from './useLoginState';

export default function useFollowBtn(
  userId: number,
  query1: string[],
  query2?: string[]
) {
  const queryClient = useQueryClient();
  const { checkAuth } = useLoginState();
  const { mutateAsync } = useMutation((data: { targetUserId: number }) =>
    mutateFollow(data)
  );

  const handleClick = async () => {
    const data = { targetUserId: userId };
    if (!checkAuth()) {
      return;
    }
    await mutateAsync(data);
    await queryClient.invalidateQueries(query1);
    if (query2) await queryClient.invalidateQueries(query2);
  };

  return handleClick;
}
