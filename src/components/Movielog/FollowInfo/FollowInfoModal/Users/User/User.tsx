import { IFollowUser } from '@/interface/user';
import ProfileImg from '@/ui/user/ProfileImg';
import Link from 'next/link';

type Props = {
  user: IFollowUser;
};

export default function User({ user }: Props) {
  const { userId, profileImg, nickName } = user;
  return (
    <Link href={`/movielog/${userId}`}>
      <div className="w-full h-[45px] flex items-center gap-[9px]">
        <div className="relative w-[45px] h-[45px] rounded-full">
          <ProfileImg
            src={profileImg}
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>
        <h2 className="text-theme-lightBlack text-body4">{nickName}</h2>
      </div>
    </Link>
  );
}
