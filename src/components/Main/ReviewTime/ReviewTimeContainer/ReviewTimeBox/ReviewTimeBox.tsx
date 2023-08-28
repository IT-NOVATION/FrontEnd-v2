import { IReviewTime } from '@/interface/reviewTime';
import UserInfo from './UserInfo/UserInfo';
import ReviewPreviews from './ReviewPreviews/ReviewPreviews';

type Props = {
  data: IReviewTime;
};

export default function ReviewTimeBox({ data }: Props) {
  const { user, reviews, isLoginUserFollowing } = data;
  return (
    <div className="w-[1116px] h-[590px] rounded-[20px] border-[0.7px] border-theme-gray shadow-[2px_6px_30px_0_#e6e6e6] flex">
      {user && <UserInfo user={user} isFollowing={isLoginUserFollowing} />}
      {reviews && <ReviewPreviews reviews={reviews} />}
    </div>
  );
}
