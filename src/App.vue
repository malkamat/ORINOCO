<template>
  <div id="app">
  <compteur></compteur>
  <test></test>
  <produits></produits>
  </div>
</template>

<script>
import Compteur from './components/Compteur.vue'
import Produits from './components/Produits.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    "compteur": Compteur,
    "test": Test,
    "produits": Produits
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
