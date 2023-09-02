import { IMovieTalkUser } from '@/interface/user';
import FollowBtn from '@/ui/buttons/FollowBtn';
import FollowingBtn from '@/ui/buttons/FollowingBtn';
import ProfileImg from '@/ui/user/ProfileImg';
import Link from 'next/link';
import Image from 'next/image';
import useFollowBtn from '@/hooks/useFollowBtn';

type Props = {
  user: IMovieTalkUser;
  isLast: boolean;
};

export default function User({ user, isLast }: Props) {
  const  handleClick  = useFollowBtn(user.userId, ['movieTalk']);
  return (
    <li
      className={`w-full h-[205px] flex items-center gap-[60px] ${
        !isLast && 'border-b border-theme-gray'
      } `}
    >
      <section className="flex gap-[18px]">
        <div className="relative rounded-full w-[118px] h-[118px]">
          <ProfileImg className="w-[118px] h-[118px]" src={user.profileImg} />
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex w-[300px] h-[25px] mt-[5px] justify-between items-center">
            <Link href={`/movielog/${user.userId}`}>
              <p className="text-title4 hover:underline">{user.nickName}</p>
            </Link>
            {user.isLoginUserFollowing ? (
              <FollowingBtn onClick={handleClick} />
            ) : (
              !user.isMyProfile && <FollowBtn onClick={handleClick} />
            )}
          </div>
          <p className="flex flex-wrap text-theme-lightBlack text-body3">
            {user?.introduction}
          </p>
        </div>
      </section>
      <section className="flex gap-[40px]">
        {user.reviews.slice(0, 2).map((review) => (
          <div
            key={review.reviewId}
            className="w-[176px] flex flex-col  hover:scale-[102%]"
          >
            <Link href={`/review/${review.reviewId}`}>
              <Image
                src={review.movie.movieImg}
                alt="포스터"
                width={180}
                height={110}
                className="w-[176px] h-[105px] object-cover rounded-[10px]"
              />
              <p className="w-full mt-[8px] flex justify-center text-body3 text-lightBlack">
                {review.reviewTitle}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </li>
  );
}
