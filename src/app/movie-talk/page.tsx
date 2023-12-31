import MovieTalk from '@/components/MovieTalk/MovieTalk';
import {
  getBestReviews,
  getPopularUsers,
  getLatestReviews,
} from '@/service/movieTalk';
import getQueryClient from '@/service/queryClient';
import RightChevronIcon from '@/ui/icons/RightChevronIcon';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '무비토크',
    description: `무비토크 | 더 많은 이야기를 쓰고 만나보세요`,
    openGraph: {
      title: '무비토크',
      images: ['/images/banners/banner4.png'],
      description: `무비토크 | 더 많은 이야기를 쓰고 만나보세요`,
    },
  };
}

export default async function MovieTalkPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['movieTalk', 'bestReviews'],
    queryFn: getBestReviews,
  });
  await queryClient.prefetchQuery({
    queryKey: ['movieTalk', 'latestReviews'],
    queryFn: getLatestReviews,
  });
  await queryClient.prefetchQuery({
    queryKey: ['movieTalk', 'popularUsers'],
    queryFn: getPopularUsers,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-[900px] mx-auto flex flex-col pt-[70px]">
      <h1 className="text-[#5f5f5f] text-[64px] font-[500] mt-[15px]">
        무비토크
      </h1>
      <p className="text-title4 text-theme-lightBlack leading-[1.5] mb-[150px]">
        잇츠무비타임의 무비스타를 소개합니다.
        {'\n'}
        무비토크는 다양한 취향을 가진 유저들을 만나고, 리뷰를 읽을 수 있는
        공간입니다.
      </p>
      <div className="w-[100vw] h-[85px] absolute top-[300px] left-0 bg-[#f5f5f5] flex justify-center items-center">
        <div className="w-[900px] flex items-center">
          <span className="text-title5 text-theme-lightBlack mr-[59px]">
            오늘의 무비스타가 되고싶다면, 재밌게 봤던 영화를 찾아 리뷰를
            작성해보세요
          </span>
          <Link href="/movie-search">
            <p className="text-title5 text-theme-main flex gap-[2px] items-center">
              무비서치 가기 <RightChevronIcon />
            </p>
          </Link>
        </div>
      </div>
      <HydrationBoundary state={dehydratedState}>
        <MovieTalk />
      </HydrationBoundary>
    </div>
  );
}
