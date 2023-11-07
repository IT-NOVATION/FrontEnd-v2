'use client';

import { mutateReview, writeReviewMovieInfo } from '@/service/writeReview';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import TitleInput from '@/components/WriteReview/TitleInput/TitleInput';
import { IWriteReviewMovie } from '@/interface/movie';
import Image from 'next/image';
import Rate from '@/components/WriteReview/Rate/Rate';
import Keywords from '@/components/WriteReview/Keywords/Keywords';
import EditorComponent from '@/components/WriteReview/ReviewEditor/Quill';
import SpoilerCheckbox from '@/components/WriteReview/SpoilerCheckbox/SpoilerCheckbox';
import WatchDateSelect from '@/components/WriteReview/WatchDateSelect/WatchDateSelect';
import { IMutateReview } from '@/interface/review';
import { useState } from 'react';
import CancelModal from '@/components/WriteReview/CancelModal/CancelModal';
import SaveModal from '@/components/WriteReview/SaveModal/SaveModal';
import { useRouter } from 'next/navigation';

type Params = {
  params: {
    movieId: number;
  };
};

export default function WriteReviewPage({ params: { movieId } }: Params) {
  const router = useRouter();
  const methods = useForm<IMutateReview>();
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [reviewId, setReviewId] = useState<null | number>(null);
  const handelCancelCick = () => {
    document.body.style.overflowY = 'hidden';
    setOpenCancelModal(true);
  };
  const handleCancelModalClose = () => {
    document.body.style.overflowY = 'scroll';
    setOpenCancelModal(false);
  };
  const handleSaveClick = () => {
    document.body.style.overflowY = 'hidden';
    setOpenSaveModal(true);
  };
  const handleSaveModalClose = () => {
    document.body.style.overflowY = 'scroll';
    setOpenSaveModal(false);
    router.push(`/review/${reviewId}`);
  };
  const handleError = () => {
    alert('이미 리뷰를 작성한 영화입니다');
    router.back();
  };
  const { data: movie, isError } = useQuery<IWriteReviewMovie>({
    queryKey: ['writeReview', `${movieId}`],
    queryFn: () => writeReviewMovieInfo(movieId),
    retry: 1,
  });
  isError && handleError();
  const { mutateAsync } = useMutation({
    mutationFn: (data: IMutateReview) => mutateReview(data),
  });

  const onValid = async (data: IMutateReview) => {
    const res = await mutateAsync({ ...data, movieId: movieId });
    console.log(res);
    setReviewId(res);
    handleSaveClick();
  };
  const onInvalid = ({
    reviewTitle,
    reviewMainText,
    star,
  }: FieldErrors<IMutateReview>) => {
    if (reviewTitle) {
      alert(reviewTitle.message);
    } else if (star) {
      alert(star.message);
    } else if (reviewMainText) {
      alert(reviewMainText.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {movie && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onValid, onInvalid)}>
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
                  onClick={handelCancelCick}
                >
                  취소
                </button>
                <button
                  type="button"
                  className="w-[580px] h-[41px] rounded-[5px] bg-theme-main text-body4 text-white"
                  onClick={methods.handleSubmit(onValid, onInvalid)}
                >
                  저장
                </button>
              </div>
            </section>
          </form>
        </FormProvider>
      )}
      {openCancelModal && <CancelModal onClose={handleCancelModalClose} />}
      {openSaveModal && <SaveModal onClose={handleSaveModalClose} />}
    </div>
  );
}
