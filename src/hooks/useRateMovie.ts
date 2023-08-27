import { useEffect, useState } from 'react';
import useLoginState from './useLoginState';
import { rateMovie } from '@/service/movie';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useRateMovie(prevScore: number, movieId: number) {
  const [scoreFixed, setScoreFixed] = useState(prevScore);
  const [score, setScore] = useState(prevScore);
  useEffect(() => {
    setScore(prevScore);
    setScoreFixed(prevScore);
  }, []);
  const queryClient = useQueryClient();

  const handleLeftHalfEnter = (idx: number) => setScore(idx + 0.5);
  const handleRightHalfEnter = (idx: number) => setScore(idx + 1);
  const { checkAuth } = useLoginState();

  const handleStarClick = async () => {
    if (!checkAuth()) {
      return;
    } else {
      setScoreFixed(score);
    }
  };

  const handleStarLeave = () => {
    if (score !== scoreFixed) {
      setScore(scoreFixed);
    }
  };
  const { mutateAsync } = useMutation(
    (data: { movieId: number; starScore: number }) => rateMovie(data)
  );

  // 개별영화페이지에서 별점 매기는 함수
  const handleRate = async () => {
    const data = { movieId: Number(movieId), starScore: scoreFixed };
    await mutateAsync(data);
    await queryClient.invalidateQueries(['movie', `${movieId}`]);
  };

  return {
    score,
    handleLeftHalfEnter,
    handleRightHalfEnter,
    handleStarClick,
    handleStarLeave,
    scoreFixed,
    handleRate,
  };
}
