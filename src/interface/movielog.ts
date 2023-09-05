import { IInterestedMovie, IReviewPreview } from './movie';
import { IFollowUser, IMovielogUser } from './user';

export interface IMovielog {
  followers: IFollowUser[];
  followings: IFollowUser[];
  interestedMovie: IInterestedMovie[];
  nowUser: IMovielogUser;
  reviews: IReviewPreview[];
  isLoginUserFollowing: boolean;
}
