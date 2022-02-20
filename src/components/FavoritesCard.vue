<script setup lang="ts">
import store from '../store'
defineProps<{
  id: number;
  favorited: boolean;
  title: string;
  img: string;
  imgAlt: string;
}>()
</script>

<template>
  <h3 v-html="title" />
  <div class="tile">
    <button
      class="toggle"
      @click="store.toggleFavorite(id)"
    >{{ favorited ? 'remove' : 'add' }} favorite</button>
  </div>
  <img class="thumb" :src="img" :alt="imgAlt" />
</template>

<style scoped>
.thumb {
  width: 360px;
  height: 202px;
  object-fit: cover;
}
.item:hover .tile {
  opacity: 1;
}
.tile {
  transition: opacity 0.25s ease-in;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(16, 26, 150, 1) 0%,
    rgba(16, 26, 150, 0.15) 100%
  );
  opacity: 0;
  height: 100%;
  height: 202px;
  width: 100%;
}
.toggle {
  position: absolute;
  display: block;
  top: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  background-color: rgba(16, 26, 150, 0.66);
  border: 1px solid white;
  border-radius: 0.25em;
  color: white;
  width: max-content;
  padding: 0.5em;
}
</style>
