<script setup lang="ts">
import store from '../store'
const props = defineProps<{ 
  movie: Movie;
   }>();
   const backgroundImage = `linear-gradient(90deg, rgba(16,26,150,1) 0%, rgba(16,26,150,0.15) 100%), url(${props.movie.img})`
</script>

<template>
<div class="card" :style="{backgroundImage}">
  <h1 class="title" v-html="movie.title"></h1>
  <!-- <img :src="movie.img" :alt="movie.imgAlt"> -->
  <p class="description">{{movie.shortDescription}}</p>
  <button class="toggle" @click="store.toggleFavorite(props.movie.id)">{{movie.favorited ? 'unfavorite' : 'favorite'}}</button>
</div>
</template>

<style scoped>
.card {
  background-size: cover;
  background-position: center;
  color: white;
  height:380px;
  width: 320px;
  display: grid;
  grid-template-rows: 33% 50% 1fr;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2em;
}
.title, .description {
  text-align: start;
  max-height: 100%;
}
.description {
  /* width: 66%; */
  overflow-y: auto;
  padding: 0 33% 1em 0;
  margin: 0;
}
.toggle {
  align-self: start;
  width: min-content;
  color: white;
  border: 1px solid white;
  border-radius: 0.25em;
  background-color: rgba(16,26,150,0.66);
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
