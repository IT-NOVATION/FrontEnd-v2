import { IReviewTime } from '@/interface/reviewTime';
import { getLoginState, getRefreshedTokens } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_REVIEW_TIME_URI = '/top/yesterday/user';

export const getReviewTime = () =>
  fetch(`${SERVER_URI}${GET_REVIEW_TIME_URI}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          return getRefreshedTokens(getReviewTime);
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data) =>
      data.map((v: any) => ({
        user: {
          userId: v.userId,
          profileImg: v.profileImg,
          nickName: v.nickName,
          introduction: v.introduction,
          grade: v.grade,
          followers: v.followers,
          followings: v.followings,
        },
        isLoginUserFollowing: v.isLoginedUserFollowsNowUser,
        reviews: v.reviews,
      }))
    );
