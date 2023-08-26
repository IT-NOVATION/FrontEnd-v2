import { getRefreshedTokens } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_MOVIE_TIME_URI = '/movies/popular-and-recommend';

export const getMovieTime = () =>
  fetch(`${SERVER_URI}${GET_MOVIE_TIME_URI}`).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res.json();
  });
