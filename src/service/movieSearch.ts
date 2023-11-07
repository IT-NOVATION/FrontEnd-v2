import { MovieSearchOrder } from '@/components/MovieSearch/MovieSearch';
import { SERVER_URI } from './instance';

const REVIEWS_URI = '/movie-search/review-order';
const STAR_URI = '/movie-search/star-score-order';
const RELEASE_DATE_URI = '/movie-search/release-order';

export const getMovieSearch = (
  order: MovieSearchOrder,
  pageParam: number | unknown
) => {
  switch (order) {
    case 'reviews':
      return fetch(`${SERVER_URI}${REVIEWS_URI}/${pageParam}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status} 에러 발생`);
          }
          return res.json();
        })
        .then((data) => {
          return { ...data, movies: data.moiveSearchDtoList };
        });
    case 'star':
      return fetch(`${SERVER_URI}${STAR_URI}/${pageParam}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status} 에러 발생`);
          }
          return res.json();
        })
        .then((data) => {
          return { ...data, movies: data.moiveSearchDtoList };
        });
    case 'releaseDate':
      return fetch(`${SERVER_URI}${RELEASE_DATE_URI}/${pageParam}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status} 에러 발생`);
          }
          return res.json();
        })
        .then((data) => {
          return { ...data, movies: data.moiveSearchDtoList };
        });
  }
};
