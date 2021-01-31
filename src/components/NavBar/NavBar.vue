<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand text-dark " to="/"> Orinoco</router-link>
  <bouton-nav></bouton-nav>
  <menu-nav></menu-nav>
</nav>
</template>

<script>
import MenuNav from '../_components/MenuNav/MenuNav'
import BountonNav from "../_components/BoutonNav/BoutonNav"
export default {
    name: "NavBar",
   components: {
       "bouton-nav": BountonNav,
       "menu-nav": MenuNav
   }

}
</script>

<style scoped src="./NavBar.css">

</style>