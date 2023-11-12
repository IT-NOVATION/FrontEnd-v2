import MovieSearch from "@/components/MovieSearch/MovieSearch";
import { IMovieSearchMovies } from "@/interface/movieSearch";
import { getMovieSearch } from "@/service/movieSearch";
import getQueryClient from "@/service/queryClient";
import RightChevronIcon from "@/ui/icons/RightChevronIcon";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "무비서치",
    description: `무비서치 | 잊고있었던 인생영화를 찾고 싶었던 당신을 위한`,
    openGraph: {
      title: "무비서치",
      images: ["/images/banners/banner3.png"],
      description: `무비서치 | 잊고있었던 인생영화를 찾고 싶었던 당신을 위한`,
    },
  };
}

export default async function MovieSearchPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery<IMovieSearchMovies>({
    queryKey: ["movieSearch", "reviews"],
    queryFn: () => getMovieSearch("reviews", 1),
    initialPageParam: 1,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[900px] mx-auto flex flex-col pt-[70px]">
      <h1 className="text-[#5f5f5f] text-[64px] font-[500] mt-[15px]">
        무비서치
      </h1>
      <p className="text-title4 text-theme-lightBlack leading-[1.5] mb-[150px]">
        It’s Movie Time에서는 매주 영화 정보를 업데이트 하고있습니다.
        {"\n"}
        원하는 영화가 보이지 않는다면 상단의 검색 기능을 활용해보세요.
      </p>
      <div className="w-[100vw] h-[85px] absolute top-[300px] left-0 bg-[#f5f5f5] flex justify-center items-center">
        <div className="w-[900px] flex items-center">
          <span className="text-title5 text-theme-lightBlack mr-[59px]">
            다른 유저들이 작성한 리뷰가 궁금하다면?
          </span>
          <Link href="/movie-talk">
            <p className="text-title5 text-theme-main flex gap-[2px] items-center">
              무비토크 가기 <RightChevronIcon />
            </p>
          </Link>
        </div>
      </div>
      <HydrationBoundary state={dehydratedState}>
        <MovieSearch />
      </HydrationBoundary>
    </div>
  );
}
