'use client';

import { mutateReview, writeReviewMovieInfo } from '@/service/writeReview';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import TitleInput from '@/components/WriteReview/TitleInput/TitleInput';
import { IWriteReviewMovie } from '@/interface/movie';
import Image from 'next/image';
import Rate from '@/components/WriteReview/Rate/Rate';
import Keywords from '@/components/WriteReview/Keywords/Keywords';
import EditorComponent from '@/components/WriteReview/ReviewEditor/Quill';
import SpoilerCheckbox from '@/components/WriteReview/SpoilerCheckbox/SpoilerCheckbox';
import WatchDateSelect from '@/components/WriteReview/WatchDateSelect/WatchDateSelect';
import { IMutateReview } from '@/interface/review';

type Params = {
  params: {
    movieId: number;
  };
};

export default function WriteReviewPage({ params: { movieId } }: Params) {
  const methods = useForm<IMutateReview>();
  const { data: movie } = useQuery<IWriteReviewMovie>(
    ['writeReview', `${movieId}`],
    () => writeReviewMovieInfo(movieId)
  );
  const { mutateAsync } = useMutation((data: IMutateReview) =>
    mutateReview(data)
  );

  const onValid = async (data: IMutateReview) => {
    await mutateAsync({ ...data, movieId: movieId });
  };
  return (
    <div className="flex flex-col items-center">
      {movie && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onValid)}>
            <TitleInput movie={movie} />
            <section className={`w-full flex flex-col items-center`}>
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
              <div className="mt-[60px] w-[900px] justify-end flex gap-[32px]">
                <WatchDateSelect />
                <SpoilerCheckbox />
              </div>
              <div className="w-[900px] mt-[20px] mb-[40px] flex justify-between">
                <button
                  type="button"
                  className="w-[310px] h-[41px] rounded-[5px] border border-theme-darkGray text-body4"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="w-[580px] h-[41px] rounded-[5px] bg-theme-main text-body4 text-white"
                >
                  저장
                </button>
              </div>
            </section>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
