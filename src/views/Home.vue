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
    <TransitionGroup name="list" class="favorites" tag="ol">
      <li class="favorite" v-for="movie in store.favorites" :key="movie.id">
        <Button :id="movie.id" :favorited="movie.favorited" />
        <h5>{{ movie.title }}</h5>
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
.favorite {
  display: flex;
  align-items: baseline;
}
.favorite * {
  margin: 0.5em 0.5em;
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
