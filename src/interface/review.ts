import { IReviewMovie, ISimpleMovie } from './movie';
import { Grade, IReviewAuthor } from './user';

export interface ISimpleReview {
  reviewId: number;
  reviewTitle: string;
}

export interface IReviewPreview {
  reviewId: number; //
  reviewTitle: string; //
  star: number; //
  reviewMainText: string; //
  createdDate: string; //
  reviewLikeCount: number; //
  hasSpoiler: boolean; //
  commentCount: number; //
  movie: ISimpleMovie; ///
}

export interface IMutateReview {
  movieId: number;
  star: number;
  reviewTitle: string;
  reviewMainText: string;
  hasGoodStory: boolean;
  hasGoodProduction: boolean;
  hasGoodScenario: boolean;
  hasGoodDirecting: boolean;
  hasGoodOst: boolean;
  hasGoodVisual: boolean;
  hasGoodActing: boolean;
  hasGoodCharterCharming: boolean;
  hasGoodDiction: boolean;
  hasCheckDate: boolean;
  hasSpoiler: boolean;
  watchDate: string;
}

export interface IReviewPage {
  loginUser: {
    isLoginUserFollowing: boolean; //수정
    pushedReviewLike: boolean;
  };
  movie: IReviewMovie;
  review: Omit<IMutateReview, 'movieId'> & {
    reviewId: number;
    createdDate: string;
  };
  user: IReviewAuthor;
}
