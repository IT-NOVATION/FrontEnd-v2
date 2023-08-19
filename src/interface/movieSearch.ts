export interface IMovieSearchMovie {
  movieImg: string;
  movieTitle: string;
  starScore: number;
  reviewCount: number;
}
export interface IMovieSearchMovies {
  movieId: number;
  movieTitle: string;
  lastPage: number;
  firstPage: number;
  nowPage: number;
  moiveSearchDtoList: IMovieSearchMovie[];
}
