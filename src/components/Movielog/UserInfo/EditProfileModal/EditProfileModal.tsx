import useOutsideClick from '@/hooks/useOutsideClick';
import { IMovielogUser, IMutateProfileUpdate } from '@/interface/user';
import { Dispatch, SetStateAction, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ProfileImgInput from './ProfileImgInput/ProfileImgInput';
import CoverImgInput from './CoverImgInput/CoverImgInput';

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  user: IMovielogUser;
};

export default function EditProfileModalLayout({
  openModal,
  setOpenModal,
  user,
}: Props) {
  const { bgImg, profileImg, nickName, introduction } = user;
  const modalRef = useRef(null);
  useOutsideClick(modalRef, openModal, setOpenModal);
  const methods = useForm<IMutateProfileUpdate>();
  const onValid = () => {};
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-theme-bgColor  z-[50] flex items-center justify-center">
      <div
        ref={modalRef}
        className="w-[530px] pt-[13px] px-[18px] h-[370px] rounded-[20px] bg-white"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onValid)}>
            <h2 className="text-body1">프로필 편집</h2>
            <section className="w-full flex justify-center items-center gap-[174px]">
              <ProfileImgInput profileImg={profileImg} />
              <CoverImgInput coverImg={bgImg} />
            </section>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
