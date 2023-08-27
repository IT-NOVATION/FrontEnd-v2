import { modalStateAtom } from '@/recoil/accountModalAtom';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import useLoginState from './useLoginState';
import { rateMovie } from '@/service/movie';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useRateMovie(prevScore: number, movieId: number) {
  const queryClient = useQueryClient();
  const [score, setScore] = useState(prevScore);
  const [scoreFixed, setScoreFixed] = useState(prevScore);

  const handleLeftHalfEnter = (idx: number) => setScore(idx + 0.5);
  const handleRightHalfEnter = (idx: number) => setScore(idx + 1);
  const { loginState } = useLoginState();
  const setModalState = useSetRecoilState(modalStateAtom);

  const handleStarClick = async () => {
    if (loginState === false) {
      setModalState(1);
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
