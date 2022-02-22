<script setup lang="ts">
import { favorites } from '../store'
import FavoritesCard from './FavoritesCard.vue';
</script>

<template>
  <div class="favorites-list">
    <TransitionGroup name="favorites" tag="ol" class="gallery favorites">
      <li
        class="item"
        v-for="movie in favorites"
        :key="movie.id"
      >
        <FavoritesCard :id="movie.id" :img="movie.img" :img-alt="movie.imgAlt" :title="movie.title" :favorited="movie.favorited" />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.item {
  position: relative;
  margin: 2em;
}
</style>
