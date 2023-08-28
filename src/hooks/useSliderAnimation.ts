import { useState } from 'react';

export default function useSliderAnimation() {
  const variants = {
    enter: ({ direction }: { direction: number }) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: ({ direction, animate }: { direction: number; animate: boolean }) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          duration: animate ? 0.5 : 0,
        },
      };
    },
  };
  const [[page, direction], setPage] = useState([0, 0]);
  const [animate, setAnimate] = useState(false);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setAnimate(true);
  };
  const handleNextClick = () => {
    paginate(1);
  };
  const handlePrevClick = () => {
    paginate(-1);
  };
  return {
    variants,
    page,
    direction,
    animate,
    handleNextClick,
    handlePrevClick,
    setAnimate,
    setPage,
  };
}
