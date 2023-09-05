import { IFollowUser } from '@/interface/user';
import { followModalType } from '../FollowInfo';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import ExitIcon from '@/ui/icons/ExitIcon';
import TypeBtns from './TypeBtns/TypeBtns';
import Users from './Users/Users';

type Props = {
  followers: IFollowUser[];
  followings: IFollowUser[];
  type: followModalType;
  setType: Dispatch<SetStateAction<followModalType | null>>;
};

export default function FollowInfoModal({
  followers,
  followings,
  type,
  setType,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const clickModalOutside = (event: any) => {
    if (type && !modalRef.current?.contains(event.target)) {
      setType(null);
    }
  };
  const handleExitClick = () => {
    setType(null);
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });
  return (
    <div className="fixed z-[21] top-0 left-0 w-full h-full flex justify-center items-center">
      <div
        ref={modalRef}
        className="relative w-[355px] h-[490px] rounded-[20px] border borer-theme-darkWhite bg-white shadow-[4px_4px_10px_0px_#cccccc77]"
      >
        <button
          onClick={handleExitClick}
          className="absolute top-[14px] right-[14px] w-[18px] h-[18px]"
        >
          <ExitIcon />
        </button>
        <TypeBtns
          type={type}
          setType={setType}
          followersCnt={followers.length}
          followingsCnt={followings.length}
        />
        <Users users={type === 'followers' ? followers : followings} />
      </div>
    </div>
  );
}
