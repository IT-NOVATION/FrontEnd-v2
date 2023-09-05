import useOutsideClick from '@/hooks/useOutsideClick';
import { IMovielogUser, IMutateProfileUpdate } from '@/interface/user';
import { Dispatch, SetStateAction, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ProfileImgInput from './EditProfileForm/ProfileImgInput/ProfileImgInput';
import CoverImgInput from './EditProfileForm/CoverImgInput/CoverImgInput';
import EditProfileForm from './EditProfileForm/EditProfileForm';

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
  const modalRef = useRef(null);
  useOutsideClick(modalRef, openModal, setOpenModal);

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-theme-bgColor  z-[50] flex items-center justify-center">
      <div
        ref={modalRef}
        className="w-[530px] pt-[13px] px-[18px] h-[400px] rounded-[20px] bg-white"
      >
        <EditProfileForm user={user} onCancel={handleCancel} />
      </div>
    </div>
  );
}
