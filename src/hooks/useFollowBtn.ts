import { mutateFollow } from '@/service/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useFollowBtn(userId: number, query: string[]) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation((data: { targetUserId: number }) =>
    mutateFollow(data)
  );

  const handleClick = async () => {
    const data = { targetUserId: userId };
    await mutateAsync(data);
    await queryClient.invalidateQueries(query);
  };

  return { handleClick };
}
