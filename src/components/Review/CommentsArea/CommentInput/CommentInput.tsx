import useLoginState from '@/hooks/useLoginState';
import { IMutateComment } from '@/interface/comments';
import { mutateComment } from '@/service/review';
import UploadIcon from '@/ui/icons/UploadIcon';
import ProfileImg from '@/ui/user/ProfileImg';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

type Props = {
  reviewId: number;
};

export default function CommentInput({ reviewId }: Props) {
  const queryClient = useQueryClient();
  const { register, setValue, handleSubmit, watch } = useForm<IMutateComment>();
  const commentLength = watch('commentText') ? watch('commentText').length : 0;
  register('reviewId');
  useEffect(() => {
    setValue('reviewId', reviewId);
  }, [reviewId]);
  const {
    checkAuth,
    state: { loginState, nickname, profileImg },
  } = useLoginState();
  const { mutateAsync } = useMutation((data: IMutateComment) =>
    mutateComment(data)
  );
  const onValid = async (data: IMutateComment) => {
      await mutateAsync(data);
      await queryClient.invalidateQueries(['comments', reviewId]);
      setValue('commentText', '');
  };
  const onInvalid = ({ commentText }: FieldErrors<IMutateComment>) => {
    alert(commentText?.message);
  };
  const handleFormClick = () => {
    checkAuth();
  };
  return (
    <form
      onClick={handleFormClick}
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="relative mt-[40px] w-full h-[250px] rounded-[20px] flex flex-col p-[13px] border-[0.7px] border-theme-darkGray"
    >
      {loginState && (
        <div className="w-full flex items-center gap-[9px]">
          <div className="relative w-[39px] h-[39px] rounded-full">
            <ProfileImg
              src={profileImg}
              className="w-[39px] h-[39px] rounded-full"
            />
          </div>
          <span className="text-body2">{nickname}</span>
        </div>
      )}
      <div className=" ml-[9px] mt-[15px] pr-[20px] pb-[15px] w-full h-[130px] overflow-y-hidden">
        <textarea
          {...register('commentText', {
            required: '내용을 입력해주세요',
            maxLength: {
              value: 500,
              message: '500글자 이내로 입력해주세요',
            },
          })}
          placeholder={
            loginState
              ? '댓글을 자유롭게 입력해주세요'
              : '잇츠무비타임에 로그인하고 댓글을 입력해보세요!'
          }
          className="h-full w-full outline:none w-full border-none resize-none outline-none text-[16px] font-[300]"
        />
      </div>
      <div className="absolute bottom-[15px] right-[15px] flex flex-col gap-[3px] items-center">
        <p
          className={`text-theme-lightGray text-[15px] font-500 ${
            commentLength >= 500 && 'text-[#FF5047] '
          }`}
        >
          {commentLength}/500
        </p>
        <button type="submit">
          <UploadIcon />
        </button>
      </div>
    </form>
  );
}
