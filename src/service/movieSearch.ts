import { SERVER_URI } from './instance';

const REVIEWS_URI = '/movie-search/review-order';
const STAR_URI = '/movie-search/star-score-order';
const RELEASE_DATE_URI = '/movie-search/release-order';

export const getMovieSearchReviewOrder = (pageParam: number) =>
  fetch(`${SERVER_URI}${REVIEWS_URI}/${pageParam}`).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res.json();
  });
