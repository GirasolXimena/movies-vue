<script setup lang="ts">
import store from '../store'
const props = defineProps<{ 
  movie: Movie;
   }>();
</script>

<template>
  <h1 v-html="movie.title"></h1>
  <h2>{{movie.id}}</h2>
  <img :src="movie.img" :alt="movie.imgAlt">
  <p>{{movie.shortDescription}}</p>
  <button @click="store.toggleFavorite(props.movie.id)">{{movie.favorited ? 'unfavorite' : 'favorite'}}</button>
</template>

<style scoped>
img {
  max-width: 100%;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
