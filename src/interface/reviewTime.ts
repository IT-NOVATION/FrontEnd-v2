import { IReviewPreview } from './movie';
import { IUserDetail } from './user';

export interface IReviewTime {
  user: IUserDetail;
  reviews: IReviewPreview;
  isLoginUserFollowing: boolean;
}
