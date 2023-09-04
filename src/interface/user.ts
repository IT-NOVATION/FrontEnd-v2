import { ISimpleReview } from './review';
import { ISimpleMovie } from '@/interface/movie';

export type Grade = 'STANDARD' | 'PREMIUM' | 'VIP' | 'SPECIAL';

export interface IUserBase {
  userId: number;
}

export interface ISimpleUser extends IUserBase {
  nickName: string;
  profileImg: string;
}

export interface IUserDetail extends ISimpleUser {
  introduction?: string;
  grade: Grade;
  followers: number;
  followings: number;
}

export interface IMovieTalkUser extends ISimpleUser {
  introduction?: string;
  isMyProfile: boolean;
  isLoginUserFollowing: boolean;
  reviews: (ISimpleReview & { movie: ISimpleMovie })[];
}

export interface IReviewAuthor extends IUserDetail {
  hasReviewLike: boolean;
  bgImg?: string;
}

export interface IReviewLikeUser extends ISimpleUser {
  isMyProfile: string;
  isLoginUserFollowing: boolean;
}
export interface ICommentUser extends ISimpleUser {}
export interface IFollowUser extends ISimpleUser {}
export interface IMovielogUser extends ISimpleUser {
  introduction?: string;
  grade: Grade;
  bgImg: string;
}
export interface IMutateProfileUpdate {
  nickname: string;
  introduction: string;
  profileImg: string;
  bgImg: string;
}
