export interface IUserBase {
  userId: number;
}
export interface IUserDetail extends IUserBase {
  profileImg: string;
  nickName: string;
  introduction?: string;
  grade: Grade;
  followers: number;
  followings: number;
}

export type Grade = 'STANDARD' | 'PREMIUM' | 'VIP' | 'SPECIAL';
