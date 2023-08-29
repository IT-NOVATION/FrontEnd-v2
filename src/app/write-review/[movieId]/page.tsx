'use client';

import { writeReviewMovieInfo } from '@/service/writeReview';
import { useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import TitleInput from '@/components/WriteReview/TitleInput/TitleInput';
import { IWriteReviewMovie } from '@/interface/movie';
type Params = {
  params: {
    movieId: number;
  };
};

export default function WriteReviewPage({ params: { movieId } }: Params) {
  const methods = useForm();
  const { data: movie } = useQuery<IWriteReviewMovie>(
    ['writeReview', `${movieId}`],
    () => writeReviewMovieInfo(movieId)
  );

  return (
    <div className="pt-[50px] flex flex-col items-center">
      {movie && (
        <FormProvider {...methods}>
          <form>
            <TitleInput movie={movie} />
          </form>
        </FormProvider>
      )}
    </div>
  );
}
