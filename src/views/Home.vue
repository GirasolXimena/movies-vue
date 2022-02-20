<script setup lang="ts">
import store from '../store'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue';
</script>

<template>
  <div class="view">
    <h1>My Movies</h1>
    <div class="gallery">
      <Card class="card" v-for="movie in store.movies" :key="movie.id" :movie="movie" />
    </div>
    <h2>Favorites</h2>
    <TransitionGroup name="favorites" class="favorites" tag="ol">
      <li class="favorite" v-for="movie in store.favorites" :key="movie.id">
        <Button :id="movie.id" :favorited="movie.favorited" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.shortDescription }}</p>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  margin: 1em 0.5em;
}
.favorites {
  padding: 0;
}
.favorite {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
button {
  align-self: center;
}
.favorite:nth-child(odd) {
  background-color: var(--secondary);
}
.favorite * {
  margin: 0.5em 0.5em;
}
.favorite h3 {
  font-weight: bolder;
  font-size: 1.5em;
}
</style>
