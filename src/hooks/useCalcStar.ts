import { useEffect, useState } from 'react';

function useCalcStar(star: number) {
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

  return { fullStar, halfStar };
}
export default useCalcStar;
