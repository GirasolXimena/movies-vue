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
  width: min-content;
  color: var(--tertiary);
  border: 1px solid var(--tertiary);
  border-radius: 0.25em;
  background-color: var(--primary);
  transition: var(--transition);
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
  background-color: var(--tertiary);
  color: var(--primary);
  border-color: var(--primary);
}
</style>
