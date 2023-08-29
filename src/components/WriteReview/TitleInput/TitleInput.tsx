import { IWriteReviewMovie } from '@/interface/movie';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  movie: IWriteReviewMovie;
};

export default function TitleInput({ movie }: Props) {
  const { title, releaseDate } = movie;
  const { register } = useFormContext();

  return (
    <section className="w-[100vw] h-[300px] bg-theme-darkWhite flex flex-col justify-end items-center">
      <div className="w-[900px] pb-[27px]">
        <input
          {...register('reviewTitle', {
            required: '제목을 입력해주세요',
            maxLength: {
              value: 20,
              message: '제목은 20글자 이하이어야 합니다',
            },
          })}
          className="w-full h-[60px] bg-inherit text-[50px] font-[300]"
          type="text"
          placeholder="리뷰 제목"
        />
        <div className="flex gap-[30px] mt-[30px] text-body3 text-theme-darkGray">
          <span>{title}</span>
          <span>{releaseDate}</span>
        </div>
      </div>
    </section>
  );
}
