<script setup lang="ts">
import { favorites } from '../store'
import FavoritesList from '../components/FavoritesList.vue';
</script>

<template>
<div class="view">
  <h1>My favorites</h1>
    <FavoritesList v-if="favorites.length" />
    <div v-else>
      <h2>You have no favorites yet.</h2>
      <p>
        <a href="#/">Go back to the list</a>
      </p>
    </div>
</div>
</template>
