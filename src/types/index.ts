interface Movie {
  id: number;
  title: string;
  shortDescription: string;
  img: string;
  imgAlt: string;
  favorited: boolean;
}

interface MovieList {
  movies: Movie[];
}