<template>
  <div id="app">
    <navbar></navbar>
   <transition name="slide-fade" mode="out-in">
     <router-view></router-view>
    </transition>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>

import NavBar from './components/NavBar/NavBar.vue'
import Footer from './components/Footer/Footer.vue'


export default {
  name: 'App',
  components: {
    "navbar" : NavBar,
    "footer-bottom": Footer,

  }
}
</script>

<style scoped>
#app {
  background-color: #f1f1f1;
  min-height: 100vh;
}

/* transitions */

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
