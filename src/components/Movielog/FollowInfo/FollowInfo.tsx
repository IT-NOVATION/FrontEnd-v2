import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { Grade, IFollowUser } from '@/interface/user';
import Badge from '@/ui/user/Badge/Badge';
import { useState } from 'react';
import FollowInfoModal from './FollowInfoModal/FollowInfoModal';

export type followModalType = 'followers' | 'followings';

type Props = {
  grade: Grade;
  followers: IFollowUser[];
  followings: IFollowUser[];
};

export default function FollowInfo({ grade, followers, followings }: Props) {
  const [modalType, setModalType] = useState<null | followModalType>(null);
  const handleClick = (type: followModalType) => {
    setModalType(type);
  };
  return (
    <section className="flex w-[900px] mx-auto mt-[33px] items-center ">
      <Badge grade={grade} />
      <button
        onClick={() => handleClick('followers')}
        className="flex text-theme-lightBlack ml-[12px] items-center gap-[6px]"
      >
        <h2 className="text-body4 ">팔로우</h2>
        <span className="text-body1 ">{followers.length}</span>
      </button>
      <button
        onClick={() => handleClick('followings')}
        className="flex text-theme-lightBlack ml-[19px] items-center gap-[6px]"
      >
        <h2 className="text-body4 ">팔로잉</h2>
        <span className="text-body1 ">{followings.length}</span>
      </button>
      {modalType && (
        <ModalPortal>
          <FollowInfoModal
            followers={followers}
            followings={followings}
            type={modalType}
            setType={setModalType}
          />
        </ModalPortal>
      )}
    </section>
  );
}
