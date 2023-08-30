import HalfStarFillIcon from '@/ui/icons/HalfStarFillIcon';
import StarFillIcon from '@/ui/icons/StarFillcon';
import { useState, useEffect } from 'react';

type Props = {
  star: number;
};

export default function Star({ star }: Props) {
  const [fullStar, setFullStar] = useState(Array(0).fill(0));
  const [halfStar, setHalfStar] = useState(Array(0).fill(0));

  useEffect(() => {
    let integer = Math.floor(star);
    let decimal = star - integer;
    if (decimal < 0.5) {
      if (decimal < 0.3) {
        decimal = 0;
      } else {
        decimal = 0.5;
      }
    }
    if (decimal > 0.5) {
      if (decimal < 0.8) {
        decimal = 0.5;
      } else {
        integer++;
        decimal = 0;
      }
    }
    setFullStar(Array(integer).fill(0));
    setHalfStar(Array(0).fill(0));
    if (decimal === 0.5) setHalfStar(Array(1).fill(0));
  }, []);

  return (
    <ul className="mt-[10px] w-full flex gap-[2px] w-[30px] h-[30px]">
      {fullStar.map((_, idx) => (
        <li className="relative w-[30px] h-[30px]" key={'full' + idx}>
          <StarFillIcon size={30} color="#AF35FE" />
        </li>
      ))}
      {halfStar.map((_, idx) => (
        <li className="relative w-[30px] h-[30px]" key={'half' + idx}>
          <HalfStarFillIcon size={30} color="#AF35FE" />
        </li>
      ))}
    </ul>
  );
}
