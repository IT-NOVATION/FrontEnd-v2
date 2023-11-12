import { getLoginState, getRefreshedTokens } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const BEST_REVIEWS_URI = '/movie-talk/best-review';
const POPULAR_USERS_URI = '/movie-talk/popular-user';
const LATEST_REVIEWS_URI = '/movie-talk/latest-review';

export const getBestReviews = () =>
  fetch(`${SERVER_URI}${BEST_REVIEWS_URI}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          getRefreshedTokens();
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data: any) =>
      data.map((user: any) => ({
        ...user,
        isLoginUserFollowing: user.isNowUserFollowThisUser,
      }))
    );
export const getPopularUsers = () =>
  fetch(`${SERVER_URI}${POPULAR_USERS_URI}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          getRefreshedTokens();
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data: any) =>
      data.map((user: any) => ({
        ...user,
        isLoginUserFollowing: user.isNowUserFollowThisUser,
      }))
    );
export const getLatestReviews = () =>
  fetch(`${SERVER_URI}${LATEST_REVIEWS_URI}`, {
    headers: getAccessTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          getRefreshedTokens();
        }
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((data: any) =>
      data.map((user: any) => ({
        ...user,
        isLoginUserFollowing: user.isNowUserFollowThisUser,
      }))
    );
