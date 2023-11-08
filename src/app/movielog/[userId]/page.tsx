import Movielog from '@/components/Movielog/Movielog';
import { IMovielog } from '@/interface/movielog';
import { getMovielog } from '@/service/movielog';
import getQueryClient from '@/service/queryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

type Props = {
  params: { userId: number };
};

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
  await queryClient.prefetchQuery({
    queryKey: ['movielog', userId],
    queryFn: () => getMovielog(userId),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[100vw] flex flex-col pt-[70px]">
      <HydrationBoundary state={dehydratedState}>
        <Movielog userId={userId} />
      </HydrationBoundary>
    </div>
  );
}
