'use client';

import useLoginState from '@/hooks/useLoginState';
import BrushIcon from '@/ui/icons/BrushIcon';
import { useParams, useRouter } from 'next/navigation';

export default function WriteReviewBtn() {
  const { movieId } = useParams();
  const { checkAuth } = useLoginState();
  const router = useRouter();
  const handleClick = () => {
    if (!checkAuth()) {
      return;
    }
    router.push(`/write-review/${movieId}`);
  };
  return (
    <button
      onClick={handleClick}
      className="text-white text-title4 gap-[4px] absolute top-[18px] right-[13px] w-[168px] h-[55px] rounded-[14px] bg-theme-darkGray shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center"
    >
      <BrushIcon /> <span>리뷰 작성</span>
    </button>
  );
}
