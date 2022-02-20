<script setup lang="ts">
import store from '../store'
import FavoritesList from '../components/FavoritesList.vue';
</script>

<template>
<div class="view">
  <h1>My favorites</h1>
    <FavoritesList v-if="store.favorites.length" />
    <div v-else>
      <h2>You have no favorites yet.</h2>
      <p>
        <a href="#/">Go back to the list</a>
      </p>
    </div>
</div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
