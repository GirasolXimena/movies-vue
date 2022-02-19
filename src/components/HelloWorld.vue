<script setup lang="ts">
import { ref } from 'vue'
import store from '../store'
import Card from './Card.vue'
import FavoritesList from './FavoritesList.vue';
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <FavoritesList />
  <div class="gallery" v-for="movie in store.movies">
  <Card :movie="movie" />
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
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
