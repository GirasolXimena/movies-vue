<script setup lang="ts">
import store from '../store'
defineProps<{ 
  id: number;
  favorited: boolean;
   }>();
</script>

<template>
  <button class="toggle" :class="{favorited}" @click="store.toggleFavorite(id)">{{favorited ? 'unfavorite' : 'favorite'}}</button>
</template>

<style scoped>
.toggle {
  align-self: start;
  width: min-content;
  color: white;
  border: 1px solid white;
  border-radius: 0.25em;
  background-color: rgba(16,26,150,0.66);
  transition: all 250ms ease;
  padding: 0.5em 1em;
}

.toggle.favorited::before {
  content: "x";
  margin-right: 0.5em;
}
.toggle::before {
  content: "+";
  margin-right: 0.5em;
}
.toggle:hover {
  background-color: white;
  color: rgba(16,26,150,1);
  border-color: rgba(16,26,150,1);
}
</style>
