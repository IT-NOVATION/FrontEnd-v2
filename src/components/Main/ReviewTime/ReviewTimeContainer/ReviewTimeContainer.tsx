'use client';

import { IReviewTime } from '@/interface/reviewTime';
import { getReviewTime } from '@/service/reviewTime';
import LeftArrowIcon from '@/ui/icons/LeftArrowIcon';
import RightArrowIcon from '@/ui/icons/RightArrowIcon';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import ReviewTimeBox from './ReviewTimeBox/ReviewTimeBox';
import { useState } from 'react';

export default function ReviewTimeContainer() {
  const { data } = useQuery<IReviewTime[]>(['reviewTime'], getReviewTime);
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
  return (
    <div className="relative mt-[50px] mb-[200px]">
      <button
        onClick={handlePrevClick}
        className="absolute top-[250px] left-[-50px]"
      >
        <LeftArrowIcon />
      </button>
      <AnimatePresence custom={{ direction, animate }} mode="popLayout">
        <motion.div
          custom={{ direction, animate }}
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'linear', duration: animate ? 0.5 : 0 }}
        >
          <ReviewTimeBox />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handleNextClick}
        className="absolute top-[250px] right-[-50px]"
      >
        <RightArrowIcon />
      </button>
    </div>
  );
}
