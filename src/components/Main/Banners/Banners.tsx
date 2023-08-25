'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import useInterval from '@/hooks/useInterval';
import BannerIndicator from '@/components/Main/Banners/BannerIndicator/BannerIndicator';
import banner1 from '../../../../public/images/banners/banner1.png';
import banner2 from '../../../../public/images/banners/banner2.png';
import banner3 from '../../../../public/images/banners/banner3.png';
import banner4 from '../../../../public/images/banners/banner4.png';

const banners = [banner1, banner2, banner3, banner4];

export default function Banners() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleIndicatorClick = (idx: number) => {
    const prev = slide;
    if (prev === 0 && idx === 3) {
      setDirection(-1);
    } else if (prev === 3 && idx === 0) {
      setDirection(1);
    } else if (prev < idx) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setSlide(idx);
  };
  const variants = {
    initial: (direction: number) => {
      return { x: direction > 0 ? '100vw' : '-100vw' };
    },
    animate: { x: 0, opacity: 1 },
    exit: (direction: number) => {
      return { x: direction > 0 ? '-100vw' : '100vw' };
    },
  };
  useInterval(() => {
    setSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, 3000);
  return (
    <div className="relative">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={slide}
          variants={variants}
          animate="animate"
          initial="initial"
          custom={direction}
          transition={{ type: 'linear', duration: 0.5 }}
          exit="exit"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Image
            alt={`banner${slide}`}
            src={banners[slide]}
            className="w-[100vw]"
          />
        </motion.div>
      </AnimatePresence>
      <ul className="absolute w-full flex justify-center items-center left-0 bottom-[10px]  gap-[8px] ">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <button
              disabled={isAnimating}
              onClick={() => handleIndicatorClick(i)}
              className="rounded-full"
            >
              <BannerIndicator key={i} selected={i === slide} />
            </button>
          ))}
      </ul>
    </div>
  );
}
