import useRateMovie from '@/hooks/useRateMovie';
import HalfStarFillIcon from '@/ui/icons/HalfStarFillIcon';
import StarFillIcon from '@/ui/icons/StarFillcon';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export default function Rate() {
  const { register, setValue } = useFormContext();
  register('star');
  const {
    score,
    handleLeftHalfEnter,
    handleRightHalfEnter,
    handleStarClick,
    handleStarLeave,
    scoreFixed,
  } = useRateMovie(0);
  useEffect(() => {
    setValue('star', scoreFixed);
  }, [scoreFixed]);

  return (
    <div className="text-body4 flex flex-col gap-[7px]">
      <p>별점</p>
      <div className="flex gap-[3px]">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <div
              className="w-[40px] h-[40px] relative cursor-pointer flex "
              onClick={handleStarClick}
              key={idx}
            >
              {score - Math.floor(score) === 0.5 &&
              Math.floor(score) === idx ? (
                <HalfStarFillIcon key={idx} color="gold" size={40} />
              ) : idx + 1 > score ? (
                <StarFillIcon key={idx} color="lightGray" size={40} />
              ) : (
                <StarFillIcon key={idx} color="gold" size={40} />
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
      </div>
    </div>
  );
}
