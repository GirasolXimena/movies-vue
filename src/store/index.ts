import { reactive } from "vue";
import data from "../api";

const store = reactive({
  movies: data.movies,
  toggleFavorite(id: number) {
    const movie = this.movies.find(movie => movie.id === id);
    if (movie) {
      movie.favorited = !movie.favorited;
    }
  },
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
  count: 0
})

export default store