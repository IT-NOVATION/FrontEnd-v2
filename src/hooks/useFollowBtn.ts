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
  const { mutate, variables, isPending } = useMutation({
    mutationFn: (data: { targetUserId: number }) => mutateFollow(data),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: query1 });
      if (query2) await queryClient.invalidateQueries({ queryKey: query2 });
    },
  });

  const handleClick = () => {
    const data = { targetUserId: userId };
    if (!checkAuth()) {
      return;
    }
    mutate(data);
  };

  return { handleClick, variables, isPending };
}
