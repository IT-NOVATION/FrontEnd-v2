import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const MOVIE_INFO_URI = '/single/movie-page/';
const MOVIE_LIKE_URI = '/push/movie-like';
const MOVIE_RATE_URI = '/single/star-evaluate';

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

export const mutateMovieLike = (data: { movieId: number }) =>
  fetch(`${SERVER_URI}${MOVIE_LIKE_URI}`, {
    method: 'POST',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
export const rateMovie = (data: { movieId: number; starScore: number }) =>
  fetch(`${SERVER_URI}${MOVIE_RATE_URI}`, {
    method: 'POST',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
