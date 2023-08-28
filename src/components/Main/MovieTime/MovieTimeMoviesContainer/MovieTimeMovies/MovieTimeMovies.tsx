'use client';

import { IMovieTimeMovie } from '@/interface/movieTime';
import MovieTimeMovie from './MovieTimeMovie/MovieTimeMovie';
import { AnimatePresence, motion } from 'framer-motion';
import useSliderAnimation from '@/hooks/useSliderAnimation';
import useHovered from '@/hooks/useHovered';

type Props = {
  movies: IMovieTimeMovie[];
  page: number;
  direction: number;
  animate: boolean;
};

export default function MovieTimeMovies({
  movies,
  page,
  direction,
  animate,
}: Props) {
  const { variants } = useSliderAnimation();
  return (
    <AnimatePresence
      custom={{ direction, animate }}
      mode="popLayout"
      initial={false}
    >
      <motion.ul
        className="flex gap-[22px]"
        custom={{ direction, animate }}
        key={page}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: 'linear', duration: animate ? 0.5 : 0 }}
      >
        {movies
          .slice(Math.abs(page % 2) * 5, Math.abs(page % 2) * 5 + 5)
          .map((movie, idx) => (
            <MovieTimeMovie
              key={movie.movieId}
              rank={Math.abs(page % 2) * 5 + idx + 1}
              movie={movie}
            />
          ))}
      </motion.ul>
    </AnimatePresence>
  );
}
