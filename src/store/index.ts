import { reactive, computed } from "vue";
import data from "../api";

const store = reactive({
  movies: data.movies,
  toggleFavorite(id: number) {
    const movie = this.movies.find(movie => movie.id === id);
    if (movie) {
      movie.favorited = !movie.favorited
    }
  }
})
export const favorites = computed(() => store.movies.filter(({ favorited }) => !!favorited))
export default store