'use client';

import { writeReviewMovieInfo } from '@/service/writeReview';
import { useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import TitleInput from '@/components/WriteReview/TitleInput/TitleInput';
import { IWriteReviewMovie } from '@/interface/movie';
import Image from 'next/image';
import Rate from '@/components/WriteReview/Rate/Rate';
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
            <section className="w-full flex flex-col items-center ">
              <div className="flex mt-[40px] gap-[25px] w-[900px]">
                <Image
                  src={movie.movieImg}
                  alt="포스터"
                  width={160}
                  height={232}
                  className="w-[160px] h-[232px]"
                />
                <div className="flex flex-col">
                  <Rate />
                </div>
              </div>
            </section>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
