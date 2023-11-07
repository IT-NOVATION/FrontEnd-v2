'use client';

import { IMovielog } from '@/interface/movielog';
import { getMovielog } from '@/service/movielog';
import { useQuery } from '@tanstack/react-query';
import UserInfo from './UserInfo/UserInfo';
import FollowInfo from './FollowInfo/FollowInfo';
import Contents from './Contents/Contents';

type Props = {
  userId: number;
};

export default function Movielog({ userId }: Props) {
  const { data } = useQuery<IMovielog>({
    queryKey: ['movielog', userId],
    queryFn: () => getMovielog(userId),
  });
  return (
    <>
      {data && (
        <>
          <UserInfo
            isLoginUserFollowing={data.isLoginUserFollowing}
            user={data.nowUser}
          />
          <FollowInfo
            grade={data.nowUser.grade}
            followers={data.followers}
            followings={data.followings}
          />
          <Contents
            reviews={data.reviews}
            interestedMovie={data.interestedMovie}
          />
        </>
      )}
    </>
  );
}
