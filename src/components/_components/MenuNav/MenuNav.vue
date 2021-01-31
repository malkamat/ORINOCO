<template>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">Accueil</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/panier" class="nav-link" href="#">Mon Panier ({{totalArticles}})</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://malkamat.github.io/portfolio/#contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "MenuNav",
     computed: {
        totalArticles() {
            return this.$store.getters.nombreProduitsPanier
        }
    }

}
</script>

<style>

</style>