<script setup lang="ts">
import Button from './Button.vue';
const props = defineProps<{ 
  movie: Movie;
   }>();
   const gradient = getComputedStyle(document.documentElement).getPropertyValue('--gradient');
   const backgroundImage = `${gradient}, url(${props.movie.img})`
</script>

<template>
<div class="card" :style="{backgroundImage}">
  <h1 class="title" v-html="movie.title"></h1>
  <p class="description">{{movie.shortDescription}}</p>
  <Button :id="movie.id" :favorited="movie.favorited" />
</div>
</template>

<style scoped>
.card {
  background-size: cover;
  background-position: center;
  color: var(--tertiary);
  width: 320px;
  display: grid;
  grid-template-rows: 1fr max-content 1fr;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2em;
}
.title, .description {
  text-align: start;
  max-height: 100%;
}
.description {
  overflow-y: auto;
  padding: 0 33% 1em 0;
  margin: 0;
}
</style>
