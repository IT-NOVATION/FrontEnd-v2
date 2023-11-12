import useFollowBtn from '@/hooks/useFollowBtn';
import { IReviewLikeUser } from '@/interface/user';
import FollowBtn from '@/ui/buttons/FollowBtn';
import FollowingBtn from '@/ui/buttons/FollowingBtn';
import ProfileImg from '@/ui/user/ProfileImg';
import Link from 'next/link';

type Props = {
  user: IReviewLikeUser;
};

export default function LikeUser({ user }: Props) {
  const { userId, profileImg, nickName, isLoginUserFollowing, isMyProfile } =
    user;
  const {handleClick} = useFollowBtn(userId, ['reviewLikeInfo']);
  return (
    <li
      key={userId}
      className="w-full h-[45px] flex justify-between items-center"
    >
      <div className="w-[200px] h-full flex gap-[9px] items-center">
        <div className="relative w-[45px] h-[45px]">
          <ProfileImg src={profileImg} className="w-[45px] h-[45px]" />
        </div>
        <Link href={`/movielog/${userId}`}>
          <p className="text-body4 text-theme-lightBlack truncate">
            {nickName}
          </p>
        </Link>
      </div>
      {isLoginUserFollowing ? (
        <FollowingBtn onClick={handleClick} />
      ) : (
        !isMyProfile && <FollowBtn onClick={handleClick} />
      )}
    </li>
  );
}
