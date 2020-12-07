<template>
<div>
    <h1>mon compteur avec vuex</h1>
    <p :key="index" v-for="(test,index) in panier" >{{test}}<button @click="supprimerArticle(index)"> - </button></p>
    <button> + </button>
    
</div>
  
</template>

<script>
import {mapState} from "vuex"

export default {
    name: "Compteur",
    data() {
         return {
          

         }
    },
    methods: {

         supprimerArticle(index) {
            this.$store.commit("REMOVE_PRODUCT",index)
        },
    },
    computed: {
          ...mapState ([
            "panier"
        ]),
    },
    created() {
      

    }

}
</script>

<style>

</style>