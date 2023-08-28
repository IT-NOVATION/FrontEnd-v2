export type Grade = 'STANDARD' | 'PREMIUM' | 'VIP' | 'SPECIAL';
import { ISimpleReview } from './review';
import { ISimpleMovie } from '@/interface/movie';

export interface IUserBase {
  userId: number;
}
export interface IUserDetail extends IUserBase {
  nickName: string;
  profileImg: string;
  introduction?: string;
  grade: Grade;
  followers: number;
  followings: number;
}

export interface IMovieTalkUser extends IUserBase {
  nickName: string;
  profileImg: string;
  introduction?: string;
  isMyProfile: boolean;
  isLoginUserFollowing: boolean;
  reviews: (ISimpleReview & { movie: ISimpleMovie })[];
}
