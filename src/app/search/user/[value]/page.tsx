<<<<<<< HEAD
import UserSearchResult from "@/components/SearchResult/UserSearchResult/UserSearchResult";
import getQueryClient from "@/service/queryClient";
import { getUserSearchResult } from "@/service/search";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
=======
import UserSearchResult from '@/components/SearchResult/UserSearchResult/UserSearchResult';
import getQueryClient from '@/service/queryClient';
import { getUserSearchResult } from '@/service/search';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
>>>>>>> feature/tanstack-v5

export const dynamic = "force-dynamic";

type Props = {
  params: {
    value: string;
  };
};

export default async function MovieSearchResultPage({
  params: { value },
}: Props) {
  const decodedValue = decodeURI(value);
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
<<<<<<< HEAD
    queryKey: ["search", "user", decodedValue],
=======
    queryKey: ['search', 'user', decodedValue],
>>>>>>> feature/tanstack-v5
    queryFn: () => getUserSearchResult(`userNm=${decodedValue}`),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <UserSearchResult value={decodedValue} />
      </HydrationBoundary>
    </div>
  );
}
