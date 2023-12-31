import { IMovieTime } from '@/interface/movieTime';
import getQueryClient from '@/service/queryClient';
import ColorEllipseIcon from '@/ui/icons/ColorEllipseIcon';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getReviewTime } from '@/service/reviewTime';
import ReviewTimeContainer from './ReviewTimeContainer/ReviewTimeContainer';

export default async function ReviewTime() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery<IMovieTime>({
    queryKey: ['reviewTime'],
    queryFn: getReviewTime,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <section className="mt-[150px] w-full flex flex-col items-center ">
      <div className="relative z-2">
        <ColorEllipseIcon className="absolute top-[-65px] right-[-65px] z-[-1]" />
        <h1 className="text-[50px] font-400 text-theme-lightBlack [text-shadow:_2px_2px_4px_rgb(0_0_0_/_25%)]">
          REVIEW TIME
        </h1>
      </div>
      <HydrationBoundary state={dehydratedState}>
        <ReviewTimeContainer />
      </HydrationBoundary>
    </section>
  );
}
