import { IUserDetail } from '@/interface/user';
import FollowBtn from '@/ui/buttons/FollowBtn';
import Badge from '@/ui/user/Badge/Badge';
import ProfileImg from '@/ui/user/ProfileImg';
import { cutIntroText } from '@/utils/cutIntroText';

type Props = {
  user: IUserDetail;
  isFollowing: boolean;
};
export default function UserInfo({ user, isFollowing }: Props) {
  const { profileImg, nickName, introduction, followers, followings } = user;
  const handleClick = () => {};
  return (
    <div className="w-[200px] ml-[30px] flex flex-col items-center">
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
      <FollowBtn onClick={handleClick} className="mt-[40px]" />
    </div>
  );
}
