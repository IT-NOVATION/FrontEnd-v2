import { IReviewAndUserInfo, IReviewPreview } from '@/interface/movie';
import AuthorBox from './AuthorBox/AuthorBox';

type Props = {
  reviewAndUser: IReviewAndUserInfo;
  isLast: boolean;
};

export default function ReviewPreview({ reviewAndUser, isLast }: Props) {
  return (
    <div
      className={`w-[full] h-[152px] pl-[10px] flex gap-[28px] items-center py-[20px] ${
        !isLast && 'border-b border-theme-gray'
      } `}
    >
      <AuthorBox author={reviewAndUser.user} />
    </div>
  );
}
