export interface IMovieTimeMovie {
  movieId: number;
  movieTitle: string;
  movieImg: string;
  starScore: number;
  popularity?: number;
}

export interface IMovieTime {
  popular: IMovieTimeMovie[];
  recommended: IMovieTimeMovie[];
}
