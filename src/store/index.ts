import { reactive } from "vue";
import data from "../api";

const store = reactive({
  movies: data.movies,
  favorites: ([] as Movie[]),
  addFavorite(movie: Movie) {
    this.favorites.push(movie)
  },
  removeFavorite(movie: Movie) {
    this.favorites.splice(this.favorites.indexOf(movie), 1)
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