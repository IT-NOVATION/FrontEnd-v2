import { IMovieTimeMovie } from './movieTime';

export interface IMoviepage {
  movie: IMovieDetail;
  loginUserInfoDto: ILoginUserInfoDto;
  reviewAndUserInfoList: IReviewAndUserInfo[];
}

export interface ISimpleMovie {
  movieId: number;
  movieImg: string;
}

export interface IWriteReviewMovie extends ISimpleMovie {
  title: string;
  releaseDate: string;
}

export interface IMovieDetail {
  movieImg: string;
  title: string;
  movieBgImg: string;
  movieGenre: string;
  movieReleasedDate: string;
  movieDetail: string;
  movieActor: string[];
  movieDirector: string;
  movieAge: string;
  movieRunningTime: number;
  top3HasFeature: { topKeywordList: string[] };
  movieLikeCount: number;
  avgStarScore: number;
}

export interface IReviewMovie extends ISimpleMovie {
  title: string;
  movieCountry: string;
  movieGenre: string;
  movieReleasedDate: string;
}

export interface ILoginUserInfoDto {
  reviewStart: number;
  movieStar: number;
  pushedMovieLike: boolean;
}

export interface IReviewAndUserInfo {
  review: IReviewPreview;
  user: IReviewAuthor;
}

export interface IReviewAuthor {
  userId: number;
  nickname?: string;
  nickName?: string;
  userProfileImg: string;
}

export interface IReviewCount {
  reviewCount: number;
}
export interface IReviewPreview {
  reviewId: number;
  reviewTitle: string;
  star?: number;
  starScore?: number;
  reviewMainText: string;
  createdDate: string;
  reviewLikeCount: number;
  hasSpoiler: boolean;
  commentCount?: number;
  movie?: {
    movieId: number;
    movieImg: string;
  };
}

export interface IInterestedMovie extends ISimpleMovie {
  title: string;
  star: number;
  hasReviewdByLoginedUser: boolean;
  reviewId?: number;
}

export interface IMovieResult {
  movieSearchResult: IMovieTimeMovie[];
  totalSize: number;
}
