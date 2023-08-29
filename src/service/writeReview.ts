import { IMutateReview } from '@/interface/review';
import { getRefreshedTokens, getLoginState } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const MOVIE_INFO_URI = '/review/movie-info/';
const MUTATE_REVIEW_URI = '/review/write';
export const writeReviewMovieInfo = (movieId: number) =>
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

export const mutateReview = (data: IMutateReview) =>
  fetch(`${SERVER_URI}${MUTATE_REVIEW_URI}`, {
    method: 'POST',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
