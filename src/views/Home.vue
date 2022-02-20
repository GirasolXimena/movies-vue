<script setup lang="ts">
import store from '../store'
import Card from '../components/Card.vue'
import FavoritesList from '../components/FavoritesList.vue';
</script>

<template>
<div class="view">
  <h1>List</h1>
  <div class="gallery">
    <Card class="card" v-for="movie in store.movies" :key="movie.id" :movie="movie" />
  </div>
  <ol>
    <li class="favorites" v-for="movie in store.favorites">
    <button @click="store.toggleFavorite(movie.id)" >&lt;/3</button>
      <h5>{{movie.title}}</h5>
      <p>{{movie.shortDescription}}</p>
    </li>
  </ol>
</div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.favorites {
  margin: 2em 1em;
  display: flex;
  align-items: baseline;
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
