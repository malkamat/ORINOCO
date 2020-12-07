<template>
  <div class="box">
      <h3>{{nombreArticles}}</h3>
  </div>
</template>

<script>
export default {
    name: "Test",
    computed: {
        nombreArticles() {
            let total = 0
            this.$store.state.panier.forEach(el => {
                total+= el.quantite
            })
            return total
        }
    }

}
</script>

<style>

</style>