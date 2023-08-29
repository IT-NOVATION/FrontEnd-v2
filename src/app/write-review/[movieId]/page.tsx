'use client';

import { writeReviewMovieInfo } from '@/service/writeReview';
import { useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import TitleInput from '@/components/WriteReview/TitleInput/TitleInput';
import { IWriteReviewMovie } from '@/interface/movie';
import Image from 'next/image';
import Rate from '@/components/WriteReview/Rate/Rate';
import Keywords from '@/components/WriteReview/Keywords/Keywords';
import ReviewEditor from '@/components/WriteReview/ReviewEditor/ReviewEditor';
import EditorComponent from '@/components/WriteReview/ReviewEditor/Quill';
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
  console.log(methods.watch());
  return (
    <div className="flex flex-col items-center">
      {movie && (
        <FormProvider {...methods}>
          <form>
            <TitleInput movie={movie} />
            <section className="w-full flex flex-col items-center ">
              <div className="flex mt-[40px] gap-[25px] w-[900px] ">
                <Image
                  src={movie.movieImg}
                  alt="포스터"
                  width={160}
                  height={232}
                  className="w-[160px] h-[232px]"
                />
                <div className="flex flex-col w-full">
                  <Rate />
                  <Keywords />
                </div>
              </div>
              <EditorComponent />
            </section>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
