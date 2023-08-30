import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_REVIEW_URI = '/review/info/';
const PUSH_REVIEW_LIKE_URI = '/push/review-like';
const GET_COMMENTS_URI = '/comment/read';
const MUTATE_COMMENT_URI = '/comment/write';
const DELETE_COMMENT_URI = '/comment/delete';
const GET_LIKE_USER_URI = '/review/info/like-user';

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
      movie: data.movie,
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
