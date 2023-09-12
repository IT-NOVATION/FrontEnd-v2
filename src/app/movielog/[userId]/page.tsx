import Movielog from '@/components/Movielog/Movielog';
import { IMovielog } from '@/interface/movielog';
import { getMovielog } from '@/service/movielog';
import getQueryClient from '@/service/queryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

type Props = {
  params: { userId: number };
};
export const dynamic = 'force-dyanmic';

export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const data: Promise<IMovielog> = getMovielog(userId);
  return {
    title: `${(await data).nowUser.nickName}`,
    description: `${(await data).nowUser.nickName}님의 무비로그`,
    openGraph: {
      title: `${(await data).nowUser.nickName}`,
      images: [`${(await data).nowUser.profileImg}`],
      description: `${(await data).nowUser.nickName}님의 무비로그`,
    },
  };
}

export default async function MovielogPage({ params: { userId } }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['movielog', userId], () =>
    getMovielog(userId)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[100vw] flex flex-col pt-[70px]">
      <Hydrate state={dehydratedState}>
        <Movielog userId={userId} />
      </Hydrate>
    </div>
  );
}
