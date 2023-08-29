'use client';

import StarFillIcon from '@/ui/icons/StarFillcon';
import WriteReviewBtn from './WriteReviewBtn/WriteReviewBtn';
import { useParams } from 'next/navigation';
import HalfStarFillIcon from '@/ui/icons/HalfStarFillIcon';
import useRateMovie from '@/hooks/useRateMovie';
import { useEffect } from 'react';

type Props = {
  prevScore: number;
};

export default function Rate({ prevScore }: Props) {
  const { movieId } = useParams();
  const {
    score,
    handleLeftHalfEnter,
    handleRightHalfEnter,
    handleStarClick,
    handleStarLeave,
    scoreFixed,
    handleRate,
  } = useRateMovie(prevScore, Number(movieId));

  useEffect(() => {
    if (scoreFixed) handleRate();
  }, [scoreFixed]);
  return (
    <section className="w-[100vw] flex justify-center mt-[11px] ">
      <div className="relative w-[882px] h-[91px] rounded-[13px] border border-[#9a9a9abf] flex gap-[2px] items-center justify-center">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <div
              className="w-[55px] h-[55px] relative cursor-pointer flex "
              onClick={handleStarClick}
              key={idx}
            >
              {score - Math.floor(score) === 0.5 &&
              Math.floor(score) === idx ? (
                <HalfStarFillIcon key={idx} color="gold" />
              ) : idx + 1 > score ? (
                <StarFillIcon key={idx} color="lightGray" />
              ) : (
                <StarFillIcon key={idx} color="gold" />
              )}
              <div
                className="w-[50%] h-full z-[20]"
                key={idx + 'left'}
                onMouseEnter={() => handleLeftHalfEnter(idx)}
                onMouseLeave={handleStarLeave}
              ></div>
              <div
                className="w-[50%] h-full z-[20]"
                key={idx + 'right'}
                onMouseEnter={() => handleRightHalfEnter(idx)}
                onMouseLeave={handleStarLeave}
              ></div>
            </div>
          ))}
        <WriteReviewBtn />
      </div>
    </section>
  );
}
