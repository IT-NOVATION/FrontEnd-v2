import useFollowBtn from '@/hooks/useFollowBtn';
import useLoginState from '@/hooks/useLoginState';
import { IUserDetail } from '@/interface/user';
import { mutateFollow } from '@/service/follow';
import FollowBtn from '@/ui/buttons/FollowBtn';
import FollowingBtn from '@/ui/buttons/FollowingBtn';
import Badge from '@/ui/user/Badge/Badge';
import ProfileImg from '@/ui/user/ProfileImg';
import { cutIntroText } from '@/utils/cutIntroText';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  user: IUserDetail;
  isFollowing: boolean;
};
export default function UserInfo({ user, isFollowing }: Props) {
  const { profileImg, nickName, introduction, followers, followings, userId } =
    user;
  const {
    state: { userId: loginUserId },
  } = useLoginState();
  const  handleClick = useFollowBtn(userId, ['reviewTime']);

  return (
    <div className="w-[200px] h-full ml-[30px] flex flex-col justify-center items-center">
      <div className="relative w-[131px] h-[131px] mb-[10px] rounded-full">
        <ProfileImg src={profileImg} />
      </div>
      <div className="relative text-title5 flex  justify-center">
        {nickName.slice(0, 10)}
        <Badge className="absolute right-[-40px]" grade={user.grade} />
      </div>
      <p className="text-body4 text-theme-lightBlack h-[15px] min-w-[10px] mt-[12px]">
        {introduction && cutIntroText(introduction)}
      </p>
      <div className="w-[125px] h-[43px] mt-[40px] flex justify-between text-theme-lightBlack text-body4">
        <div className="flex flex-col gap-[4px]">
          <span>팔로워</span>
          <span className="text-[20px] font-[400] text-center">
            {followers}
          </span>
        </div>
        <div className="flex flex-col gap-[4px] ">
          <span>팔로잉</span>
          <span className="text-[20px] font-[400] text-center">
            {followings}
          </span>
        </div>
      </div>
      <div className="mt-[40px]">
        {isFollowing ? (
          <FollowingBtn onClick={handleClick} />
        ) : (
          userId !== loginUserId && <FollowBtn onClick={handleClick} />
        )}
      </div>
    </div>
  );
}
