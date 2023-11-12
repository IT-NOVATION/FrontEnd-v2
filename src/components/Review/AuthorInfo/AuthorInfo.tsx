import useFollowBtn from '@/hooks/useFollowBtn';
import { IReviewAuthor } from '@/interface/user';
import FollowBtn from '@/ui/buttons/FollowBtn';
import FollowingBtn from '@/ui/buttons/FollowingBtn';
import Badge from '@/ui/user/Badge/Badge';
import ProfileImg from '@/ui/user/ProfileImg';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  author: IReviewAuthor;
  isLoginUserFollowing: boolean;
};

export default function AuthorInfo({ author, isLoginUserFollowing }: Props) {
  const {
    nickName,
    bgImg,
    followers,
    followings,
    introduction,
    grade,
    userId,
    profileImg,
  } = author;
  const { handleClick } = useFollowBtn(userId, ['review']);
  return (
    <section
      className={`relative w-[100vw] h-[196px] ${
        !bgImg && 'bg-[#F8F8F8]'
      } text-theme-lightBlack `}
    >
      {bgImg && <Image src={bgImg} alt="베경이미지" fill />}
      <div className="relative mt-0 w-[900px] mx-auto ">
        <div className="mt-[30px] flex items-center gap-[15px]">
          <Link href={`/movielog/${userId}`}>
            <h2 className=" text-body1">{nickName}</h2>
          </Link>
          <Badge grade={grade} />
        </div>
        <div className="mt-[10px]">
          <h3 className="text-body4">{introduction ?? ''}</h3>
        </div>
        <div className="mt-[28px] flex items-center gap-[20px]">
          <div className="flex items-center gap-[6px]">
            <span>팔로워</span>
            <span>{followers}</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span>팔로잉</span>
            <span>{followings}</span>
          </div>
        </div>
        <div className="absolute top-[-65px] right-0 w-[130px] h-[130px] rounded-full flex justify-center">
          <ProfileImg src={profileImg} className="w-[130px] h-[130px]" />
          <div className="mt-[150px]">
            {isLoginUserFollowing ? (
              <FollowingBtn onClick={handleClick} />
            ) : (
              <FollowBtn onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
