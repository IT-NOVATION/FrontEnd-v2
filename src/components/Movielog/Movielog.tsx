'use client';

import { IMovielog } from '@/interface/movielog';
import { getMovielog } from '@/service/movielog';
import { useQuery } from '@tanstack/react-query';
import UserInfo from './UserInfo/UserInfo';

type Props = {
  userId: number;
};

export default function Movielog({ userId }: Props) {
  const { data } = useQuery<IMovielog>(['movielog', userId], () =>
    getMovielog(userId)
  );

  return <>{data && <UserInfo user={data?.nowUser} />}</>;
}
