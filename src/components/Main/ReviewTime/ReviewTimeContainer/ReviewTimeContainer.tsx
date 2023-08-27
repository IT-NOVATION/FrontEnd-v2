'use client';

import { IReviewTime } from '@/interface/reviewTime';
import { getReviewTime } from '@/service/reviewTime';
import LeftArrowIcon from '@/ui/icons/LeftArrowIcon';
import RightArrowIcon from '@/ui/icons/RightArrowIcon';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import ReviewTimeBox from './ReviewTimeBox/ReviewTimeBox';
import { useState } from 'react';
import useSliderAnimation from '@/hooks/useSliderAnimation';

export default function ReviewTimeContainer() {
  const { data } = useQuery<IReviewTime[]>(['reviewTime'], getReviewTime);
  const {
    variants,
    page,
    direction,
    animate,
    handleNextClick,
    handlePrevClick,
  } = useSliderAnimation();
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
