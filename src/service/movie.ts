import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const MOVIE_INFO_URI = '/single/movie-page/';

export const getMovieInfo = (movieId: number) =>
  fetch(`${SERVER_URI}${MOVIE_INFO_URI}${movieId}`, {
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
