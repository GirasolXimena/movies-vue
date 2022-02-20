<script setup lang="ts">
import Button from './Button.vue';
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
    <Button :id="id" :favorited="favorited" />
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
  transition: var(--transition);
  position: absolute;
  background: var(--gradient);
  opacity: 0;
  height: 100%;
  height: 202px;
  width: 100%;
  display: grid;
  place-content: center;
}
</style>
