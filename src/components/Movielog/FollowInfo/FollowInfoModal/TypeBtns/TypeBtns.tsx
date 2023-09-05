import { type } from 'os';
import { Dispatch, SetStateAction } from 'react';
import { followModalType } from '../../FollowInfo';

type Props = {
  type: followModalType;
  setType: Dispatch<SetStateAction<followModalType | null>>;
  followersCnt: number;
  followingsCnt: number;
};

export default function TypeBtns({
  type,
  setType,
  followersCnt,
  followingsCnt,
}: Props) {
  const changeTypeTo = (type: followModalType) => {
    setType(type);
  };
  return (
    <section className="w-full flex mt-[36px]">
      <button
        onClick={() => changeTypeTo('followers')}
        className={`w-[50%] flex justify-center items-center pb-[8px] gap-[6px] text-theme-lightBlack text-body4 border-b-[1.5px] border-black ${
          !(type === 'followers') && 'text-theme-lightGray border-theme-gray'
        }`}
      >
        <span>팔로우</span>
        <span>{followersCnt}</span>
      </button>
      <button
        onClick={() => changeTypeTo('followings')}
        className={`w-[50%] flex justify-center items-center pb-[8px] gap-[6px] text-theme-lightBlack text-body4 border-b-[1.5px] border-black ${
          !(type === 'followings') && 'text-theme-lightGray border-theme-gray'
        }`}
      >
        <span>팔로워</span>
        <span>{followingsCnt}</span>
      </button>
    </section>
  );
}
