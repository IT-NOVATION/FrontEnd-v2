import { IMutateComment } from '@/interface/comments';
import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_REVIEW_URI = '/review/info/';
const MUTATE_REVIEW_LIKE_URI = '/push/review-like';
const GET_COMMENTS_URI = '/comment/read';
const MUTATE_COMMENT_URI = '/comment/write';
const DELETE_COMMENT_URI = '/comment/delete/';
const GET_LIKE_USER_URI = '/review/info/like-user/';

// 리뷰 기본 정보
export const getReview = (reviewId: number) =>
  fetch(`${SERVER_URI}${GET_REVIEW_URI}${reviewId}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          return getRefreshedTokens(getLoginState);
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data) => ({
      loginUser: {
        isLoginUserFollowing: data.loginUser.pushedFollow,
        pushedReviewLike: data.loginUser.pushedReviewLike,
      },
      movie: {
        movieId: data.movie.movieId,
        title: data.movie.title,
        movieReleasedDate: data.movie.movieReleaseDate,
        movieImg: data.movie.movieImg,
        movieGenre: data.movie.movieGenre,
        movieCountry: data.movie.movieCountry,
      },
      review: data.review,
      user: {
        userId: data.user.userId,
        bgImg: data.user.bgImg,
        grade: data.user.grade,
        hasReviewLike: data.user.hasReviewLike,
        introduction: data.user.introduction,
        nickName: data.user.nickname,
        profileImg: data.user.profileImg,
        followers: data.user.followerNum,
        followings: data.user.followingNum,
      },
    }));

// 좋아요 누르기
export const mutateReviewLike = (data: { reviewId: number }) =>
  fetch(`${SERVER_URI}${MUTATE_REVIEW_LIKE_URI}`, {
    method: 'POST',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });

// 좋아요 정보 가져오기
export const getLikeInfo = (reviewId: number) =>
  fetch(`${SERVER_URI}${GET_LIKE_USER_URI}${reviewId}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          return getRefreshedTokens(getLoginState);
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data) =>
      data.map((user: any) => ({
        userId: user.userId,
        nickName: user.nickname,
        profileImg: user.profileImg,
        isMyProfile: user.isMyProfile,
        isLoginUserFollowing: user.isLoginUserFollowed,
      }))
    );

// 댓글 무한스크롤로 가져오기
export const getComments = (params: string) =>
  fetch(`${SERVER_URI}${GET_COMMENTS_URI}?${params}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          return getRefreshedTokens(getLoginState);
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data) => ({
      ...data,
      commentList: data.commentList.map((comment: any) => ({
        ...comment,
        commentUserInfo: {
          userId: comment.commentUserInfo.userId,
          nickName: comment.commentUserInfo.nickname,
          profileImg: comment.commentUserInfo.profileImg,
        },
      })),
    }));

export const deleteComment = (commentId: number) =>
  fetch(`${SERVER_URI}${DELETE_COMMENT_URI}${commentId}`, {
    headers: getAccessTokenHeader(),
  }).then((res) => {
    if (!res.ok) {
      if (res.status === 401) {
        return getRefreshedTokens(getLoginState);
      }
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });

// 댓글 작성
export const mutateComment = (data: IMutateComment) =>
  fetch(`${SERVER_URI}${MUTATE_COMMENT_URI}`, {
    method: 'POST',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
