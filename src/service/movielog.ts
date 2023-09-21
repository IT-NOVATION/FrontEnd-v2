import { IMutateProfileUpdate } from '@/interface/user';
import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_MOVIELOG_URI = '/movielog/';
const MUTATE_PROFILE_UPDATE_URI = '/user/auth/profile';

export const getMovielog = (userId: number) =>
  fetch(`${SERVER_URI}${GET_MOVIELOG_URI}${userId}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          return getRefreshedTokens(getMovielog);
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data: any) => ({
      isLoginUserFollowing: data.isLoginedUserFollowsNowUser,
      followers: data.followers.map((user: any) => ({
        userId: user.userId,
        nickName: user.nickname,
        profileImg: user.profileImg,
      })),
      followings: data.followings.map((user: any) => ({
        userId: user.userId,
        nickName: user.nickname,
        profileImg: user.profileImg,
      })),
      interestedMovie: data.interestedMovie,
      nowUser: {
        userId: data.nowUser.userId,
        bgImg: data.nowUser.bgImg,
        grade: data.nowUser.grade,
        introduction: data.nowUser.introduction,
        nickName: data.nowUser.nickname,
        profileImg: data.nowUser.profileImg,
      },
      reviews: data.reviews.map((review: any) => ({
        commentCount: review.commentCount,
        createdDate: review.createdDate,
        hasSpoiler: review.hasSpoiler,
        movie: review.movieofReview,
        reviewId: review.reviewId,
        reviewLikeCount: review.reviewLikeCount,
        reviewMainText: review.reviewMainText,
        reviewTitle: review.reviewTitle,
        star: review.star,
      })),
    }));

export const mutateProfileUpdate = (data: IMutateProfileUpdate) =>
  fetch(`${SERVER_URI}${MUTATE_PROFILE_UPDATE_URI}`, {
    method: 'PUT',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
