import { ICommentUser } from './user';

export interface IComments {
  lastPage: number;
  firstPage: number;
  nowPage: number;
  totalCommentCount: number;
  commentList: IComment[];
}

export interface IComment {
  commentId: number;
  commentText: string;
  createDate: string;
  commentUserInfo: ICommentUser;
}

export interface IMutateComment {
  reviewId: number;
  commentText: string;
}
