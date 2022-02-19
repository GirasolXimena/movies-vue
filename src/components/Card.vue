<script setup lang="ts">
import store from '../store'
const props = defineProps<{ 
  movie: Movie;
   }>();
</script>

<template>
<div class="card" :style="{background: `linear-gradient(0deg, rgba(16,26,150,1) 0%, rgba(255,76,211,0.4) 100%), url(${movie.img})`}">
  <h1 v-html="movie.title"></h1>
  <h2>{{movie.id}}</h2>
  <!-- <img :src="movie.img" :alt="movie.imgAlt"> -->
  <p>{{movie.shortDescription}}</p>
  <button @click="store.toggleFavorite(props.movie.id)">{{movie.favorited ? 'unfavorite' : 'favorite'}}</button>
</div>
</template>

<style scoped>
.card {
  color: white;
}
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
