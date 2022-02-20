<script setup lang="ts">
import store from '../store'
import FavoritesCard from './FavoritesCard.vue';
</script>

<template>
  <div class="favorites-list">
    <h5>favorites</h5>
    <TransitionGroup name="favorites" tag="ol" class="gallery favorites">
      <li
        class="item"
        v-for="movie in store.favorites"
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
}
.thumb {
  width: 360px;
  height: 202px;
  object-fit: cover;
}
.item {
  position: relative;
  margin: 2em;
}

.favorites-enter-active,
.favorites-leave-active {
  transition: all 0.5s ease;
}
.favorites-enter-from,
.favorites-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
