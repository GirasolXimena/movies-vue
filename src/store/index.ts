import { reactive } from "vue";
import data from "../api";

const store = reactive({
  movies: data.movies,
  favorites: [] as Movie[],
  toggleFavorite(id: number) {
    const movie = this.movies.find(movie => movie.id === id);
    if (movie && !movie.favorited) {
      movie.favorited = true;
      this.favorites.push(movie);
    } else if (movie && movie.favorited) {
      movie.favorited = false;
      this.favorites = this.favorites.filter(fav => fav.id !== id);
    }
  }
})

export default store