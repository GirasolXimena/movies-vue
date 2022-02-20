<script lang="ts">
import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
import NotFound from './views/404.vue'
import { defineComponent } from 'vue'

interface Routes {
  [key: string]: typeof NotFound
  '/': typeof Home
  '/favorites': typeof Favorites
}
const routes: Routes = {
  '/': Home,
  '/favorites': Favorites
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
  <a href="#/favorites">My Favorites</a>
  <Transition name="fade" mode="out-in" appear>
    <component :is="currentView"></component>
  </Transition>
</template>

<style>
:root {
  --primary : rgba(16, 26, 150, 1);
  --secondary : rgba(16, 26, 150, 0.15);
  --tertiary: rgba(255,255,255,1);
  --link-color: var(--primary);
  --transition: all 0.5s ease;
  --gradient: linear-gradient(
    90deg,
    var(--primary) 0%,
    var(--secondary) 100%
  )
}
a {
  color: var(--link-color);
}
html {
  background-color: var(--secondary);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
a {
  font-size: 1.25em;
}
.fade-enter-active,
.fade-leave-active,
.favorites-enter-active,
.favorites-leave-active {
  transition: var(--transition);
}
.fade-enter-from,
.fade-leave-to,
.favorites-enter-from,
.favorites-leave-to {
  opacity: 0;
}
.favorites-enter-from,
.favorites-leave-to {
  transform: translateX(30px);
}
</style>
