import { IComments } from '@/interface/comments';
import { getComments } from '@/service/review';
import { useInfiniteQuery } from '@tanstack/react-query';
import CommentsPage from './CommentsPage/CommentsPage';

type Props = {
  reviewId: number;
};

export default function CommentsInfo({ reviewId }: Props) {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<IComments>({
    queryKey: ['comments', reviewId],
    queryFn: ({ pageParam = 1 }) =>
      getComments(`reviewId=${reviewId}&page=${pageParam}`),
    getNextPageParam: ({ nowPage, lastPage }) => {
      if (nowPage === lastPage) {
        return false;
      }
      return nowPage + 1;
    },
  });
  const handleClick = () => {
    fetchNextPage();
  };
  return (
    <section className="flex flex-col mt-[15px] mb-[250px]">
      {data && (
        <>
          <h2 className="ml-[5px] text-body4 text-theme-lightBlack">
            댓글 {data.pages[0].totalCommentCount}
          </h2>
          {data.pages[0].totalCommentCount && (
            <div className="w-full flex flex-col mt-[15px] border-t border-theme-darkGray">
              {hasNextPage && (
                <div className="w-full h-[45px] flex justify-center items-center border-b border-theme-darkGray ">
                  <button onClick={handleClick}>
                    <span className="text-theme-darkGray">이전 댓글 보기</span>
                  </button>
                </div>
              )}
              <ul className="w-full flex flex-col ">
                {data.pages.reverse().map((page) => (
                  <li key={page.nowPage}>
                    <CommentsPage comments={page.commentList} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  );
}
