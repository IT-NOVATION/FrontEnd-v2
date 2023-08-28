import { ISimpleMovie } from './movie';

export interface ISimpleReview {
  reviewId: number;
  reviewTitle: string;
}

export interface IReviewPreview {
  reviewId: number;
  reviewTitle: string;
  star: number;
  reviewMainText: string;
  createdDate: string;
  reviewLikeCount: number;
  hasSpoiler: boolean;
  commentCount: number;
  movie: ISimpleMovie;
}
