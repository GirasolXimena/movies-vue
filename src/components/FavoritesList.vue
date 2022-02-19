<script setup lang="ts">
import store from '../store'

</script>

<template>
<div class="favorites-list">
  <h1>Favorites</h1>
  <ul class="gallery favorites" v-for="movie in store.movies.filter(movie => movie.favorited)">
    <li :id="String(movie.id)">
      <h3>{{movie.title}}</h3>
      <img :src="movie.img" :alt="movie.imgAlt">
      <button @click="store.toggleFavorite(movie.id)">{{movie.favorited ? 'remove' : 'add'}} favorite</button>
    </li>
  </ul>
</div>
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
