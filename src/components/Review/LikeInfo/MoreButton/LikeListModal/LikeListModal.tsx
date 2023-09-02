import useOutsideClick from '@/hooks/useOutsideClick';
import { IReviewLikeUser } from '@/interface/user';
import { Dispatch, MutableRefObject, SetStateAction, useRef } from 'react';
import LikeUser from './LikeUser/LIkeUser';

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  likeInfo: IReviewLikeUser[];
};

export default function LikeListModal({
  openModal,
  setOpenModal,
  likeInfo,
}: Props) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, openModal, setOpenModal);

  return (
    <div
      ref={modalRef}
      className="absolute py-[20px] pl-[19px] pr-[17px] bottom-[-395px] right-[-450px] w-[355px] h-[440px] bg-white border border-[rgb(248, 248, 248)] rounded-[20px] shadow-[4px_4px_10px_0_#cccccc77] z-50"
    >
      <ul className="h-full flex flex-col gap-[15px] pr-[25px] overflow-y-scroll">
        {likeInfo.map((user) => (
          <LikeUser key={user.userId} user={user} />
        ))}
      </ul>
    </div>
  );
}
