import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_MOVIE_RESULT_URI = '/search/movie';
const GET_USER_RESULT_URI = '/search/user';

export const getMovieSearchResult = (params: string) =>
  fetch(`${SERVER_URI}${GET_MOVIE_RESULT_URI}?${params}`, {
    headers: getAccessTokenHeader(),
  }).then((res) => {
    if (!res.ok) {
      if (res.status === 401) {
        return getRefreshedTokens(getLoginState);
      }
      throw new Error(`${res.status} 에러 발생`);
    }
    return res.json();
  });

export const getUserSearchResult = (params: string) =>
  fetch(`${SERVER_URI}${GET_USER_RESULT_URI}?${params}`, {
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
      totalSize: data.totalSize,
      userSearchResponseDtoList: data.userSearchResponseDtoList.map(
        (user: any) => ({
          userId: user.userId,
          isMyProfile: user.isMyProfile,
          nickName: user.nickName,
          introduction: user.introduction,
          reviews: user.reviews.map((review: any) => ({
            reviewId: review.reviewId,
            reviewTitle: review.reviewTitle,
            movie: {
              movieImg: review.movieImg,
            },
          })),
          isLoginUserFollowing: user.isNowUserFollowThisUser,
        })
      ),
    }));
