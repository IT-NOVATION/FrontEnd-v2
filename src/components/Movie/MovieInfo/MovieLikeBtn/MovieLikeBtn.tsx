import HeartIcon from '@/ui/icons/HeartIcon';
import HeartFillIcon from '@/ui/icons/HeartFillIcon';
type Props = {
  liked: boolean;
  likeCount: number;
};
export default function MovieLikeBtn({ liked, likeCount }: Props) {
  const handleLikeClick = () => {
    // 좋아요 서버 연동...
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
