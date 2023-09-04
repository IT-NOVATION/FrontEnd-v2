import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { IMovielogUser } from '@/interface/user';
import ProfileImg from '@/ui/user/ProfileImg';
import Image from 'next/image';
import { useState } from 'react';
import EditProfileModal from './EditProfileModal/EditProfileModal';

type Props = {
  user: IMovielogUser;
};

export default function UserInfo({ user }: Props) {
  const { bgImg, profileImg, nickName, introduction } = user;
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <section className="w-full">
      <div
        className={`relative w-[100vw] h-[196px] ${
          !bgImg && 'bg-theme-lightGray'
        }`}
      >
        {bgImg && <Image src={bgImg} alt="베경이미지" fill />}
        <div className="relative w-[900px] h-full mx-auto">
          <div className="absolute top-[50px] left-0">
            <div className="relative w-[208px] h-[208px] rounded-full">
              <ProfileImg
                src={profileImg}
                className="w-[208px] h-[208px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[900px] mx-auto mt-[67px] text-theme-lightBlack flex items-center justify-between">
        <p className="flex gap-[21px] items-center">
          <span className="text-title2">{nickName}</span>
          {introduction && (
            <span className="text-body1 ml-[21px]">{introduction}</span>
          )}
        </p>
        <button
          onClick={handleClick}
          className="w-[91px] h-[27px] rounded-[16.5px] border border-theme-gray text-body5"
        >
          프로필 편집
        </button>
      </div>
      {openModal && (
        <ModalPortal>
          <EditProfileModal
            user={user}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </ModalPortal>
      )}
    </section>
  );
}
