import Movielog from '@/components/Movielog/Movielog';
import { getMovielog } from '@/service/movielog';
import getQueryClient from '@/service/queryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';

type Props = {
  params: { userId: number };
};

export default function MovielogPage({ params: { userId } }: Props) {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(['movielog', userId], () => getMovielog(userId));
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="w-[100vw] flex flex-col pt-[70px]">
      <Hydrate state={dehydratedState}>
        <Movielog userId={userId} />
      </Hydrate>
    </div>
  );
}
