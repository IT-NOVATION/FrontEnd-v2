import { IMovielogUser, IMutateProfileUpdate } from '@/interface/user';
import { useForm, FormProvider } from 'react-hook-form';
import CoverImgInput from './CoverImgInput/CoverImgInput';
import ProfileImgInput from './ProfileImgInput/ProfileImgInput';
import NickNameInput from './NickNameInput/NickNameInput';
import IntroTextarea from './IntroTextarea/IntroTextarea';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutateProfileUpdate } from '@/service/movielog';

type Props = {
  user: IMovielogUser;
  onCancel: () => void;
};

export default function EditProfileForm({ user, onCancel }: Props) {
  const { userId, bgImg, profileImg, nickName, introduction } = user;
  const methods = useForm<IMutateProfileUpdate>();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation((data: IMutateProfileUpdate) =>
    mutateProfileUpdate(data)
  );
  const onValid = async (data: IMutateProfileUpdate) => {
    try {
      await mutateAsync(data);
      await queryClient.invalidateQueries();
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onValid)}>
        <h2 className="text-body1">프로필 편집</h2>
        <section className="w-full flex justify-center items-center gap-[174px]">
          <ProfileImgInput profileImg={profileImg} />
          <CoverImgInput coverImg={bgImg} />
        </section>
        <NickNameInput nickName={nickName} />
        <IntroTextarea introduction={introduction} />
        <section className="mt-[18px] w-full flex justify-center items-center gap-[7px]">
          <button
            onClick={onCancel}
            type="button"
            className="w-[63px] h-[21px] rounded-[34.5px] border border-theme-gray text-body4 text-theme-gray flex items-center justify-center"
          >
            취소
          </button>
          <button
            type="submit"
            className={`w-[63px] h-[21px] rounded-[34.5px] border border-theme-main text-body4 text-theme-main flex items-center justify-center
            `}
          >
            저장
          </button>
        </section>
      </form>
    </FormProvider>
  );
}
