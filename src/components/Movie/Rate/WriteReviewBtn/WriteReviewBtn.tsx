'use client';

import useLoginState from '@/hooks/useLoginState';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import BrushIcon from '@/ui/icons/BrushIcon';
import { useParams, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

export default function WriteReviewBtn() {
  const { movieId } = useParams();
  const { loginState } = useLoginState();
  const setModalState = useSetRecoilState(modalStateAtom);
  const router = useRouter();
  const handleClick = () => {
    if (loginState) {
      router.push(`/write-review/${movieId}`);
    } else {
      setModalState(1);
    }
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
