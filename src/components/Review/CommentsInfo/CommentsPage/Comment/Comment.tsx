import useLoginState from '@/hooks/useLoginState';
import { IComment } from '@/interface/comments';
import ProfileImg from '@/ui/user/ProfileImg';
import DeleteBtn from './DeleteBtn.tsx/DeleteBtn';
import { Suspense, useLayoutEffect, useState } from 'react';

type Props = {
  comment: IComment;
};

export default function Comment({ comment }: Props) {
  const [isMyComment, setIsMyComment] = useState(false);
  const {
    state: { userId },
  } = useLoginState();
  useLayoutEffect(() => {
    userId === comment.commentUserInfo.userId && setIsMyComment(true);
  }, [userId]);

  return (
    <div
      className={`relative w-full h-auto min-h-[125px] pb-[25px] pt-[25px] pl-[22px] pr-[15px] flex flex-col border-b-[0.5px] border-theme-lightGray ${
        isMyComment && 'bg-theme-darkWhite'
      }`}
    >
      {isMyComment && <DeleteBtn commentId={comment.commentId} />}
      <div className="flex items-center h-[40px]">
        <div className="relative w-[40px] h-[40px] rounded-full">
          <ProfileImg
            src={comment.commentUserInfo.profileImg}
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
        <span className="ml-[7px] text-theme-lightBlack text-[15px] font-[500]">
          {comment.commentUserInfo.nickName}
        </span>
        <span className="ml-[15px] text-theme-darkGray text-body5">
          {comment.createDate}
        </span>
      </div>
      <p className="w-full pt-[12px] text-theme-lightBlack text-body4">
        {comment.commentText}
      </p>
    </div>
  );
}
