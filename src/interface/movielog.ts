import { IInterestedMovie } from './movie';
import { IFollowUser, IMovielogUser } from './user';
import { IReviewPreview } from './review';

export interface IMovielog {
  followers: IFollowUser[];
  followings: IFollowUser[];
  reviews: IReviewPreview[];
  interestedMovie: IInterestedMovie[];
  nowUser: IMovielogUser;
  isLoginUserFollowing: boolean;
}
