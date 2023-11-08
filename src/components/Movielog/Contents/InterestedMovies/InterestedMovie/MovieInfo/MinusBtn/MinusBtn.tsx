import { mutateMovieLike } from '@/service/movie';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  movieId: number;
  userId: number;
};

export default function MinusBtn({ movieId }: Props) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: { movieId: number }) => mutateMovieLike(data),
    onSettled:()=> queryClient.invalidateQueries()
  });
  const handleClick =  () => {
    const data = { movieId };
    mutate(data);
  };
  return (
    <button
      onClick={handleClick}
      className="w-[57px] h-[57px] flex items-center justify-center rounded-[15px] bg-[ var(--Low-op-btn, rgba(249, 249, 249, 0.20))] backdrop-blur-sm"
    >
      <div className="w-[22px] h-[5px] bg-white" />
    </button>
  );
}
