import ModalPortal from '@/components/ModalPortal/ModalPortal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { IReviewLikeUser } from '@/interface/user';
import MoreIcon from '@/ui/icons/MoreIcon';
import { useRef, useState } from 'react';
import LikeListModal from './LikeListModal/LikeListModal';

type Props = {
  likeInfo: IReviewLikeUser[];
};

export default function MoreButton({ likeInfo }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute bottom-0 right-[-60px] w-[45px] h-[45px] rounded-full flex justify-center items-center border border-theme-lightGray"
      >
        <MoreIcon />
      </button>
      {openModal && (
        <LikeListModal
          likeInfo={likeInfo}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}
