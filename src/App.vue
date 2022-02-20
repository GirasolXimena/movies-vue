<script lang="ts">
import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
import NotFound from './views/404.vue'
import { defineComponent } from 'vue'

interface Routes {
  [key: string]: typeof NotFound
  '/': typeof Home
  '/about': typeof Favorites
}
const routes: Routes = {
  '/': Home,
  '/about': Favorites
}


export default defineComponent({
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView(): typeof Home | typeof Favorites {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
   <Transition name="fade" mode="out-in" appear>
    <component :is="currentView"></component>
  </Transition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
