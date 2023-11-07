import { deleteComment } from '@/service/review';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = { commentId: number };

export default function DeleteBtn({ commentId }: Props) {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
  });
  const handleClick = async () => {
    await mutateAsync(commentId);
    await queryClient.invalidateQueries({ queryKey: ['comments'] });
  };
  return (
    <button
      onClick={handleClick}
      className="absolute top-[35px] right-[20px] text-body5 theme-darkGray"
    >
      삭제
    </button>
  );
}
