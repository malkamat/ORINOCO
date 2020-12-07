<template>
  <div>
      <h1>produits</h1>
      <button data-test="test" @click="afficherAllProduits">teddies</button>
      <button @click="afficherAllProduits">furniture</button>
      <button @click="afficherAllProduits">cameras</button>
      <ul>
          <li 
          @click="afficherSingleProduit"
          :data-id="produit._id"
          :key="index" v-for="(produit,index) in produits" >{{produit.name}}</li>
      </ul>
      <article v-if="produit"
      @click="checkProduitPanier(produit,quantite)" >
          {{produit}}
      </article>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: "Produits",
    data() {
        return {
            currentCat: null,
            quantite: 10
        }
    },
    methods: {
      
        afficherAllProduits(e) {  
            this.$store.dispatch("loadAllProducts" ,{categorie : e.target.innerHTML}) 
            this.currentCat = e.target.innerHTML
            
            
        },
        afficherSingleProduit(e) {  
            this.$store.dispatch("loadSingleProduct" ,{categorie : this.currentCat, id : e.target.dataset.id }) 
            
        },
       checkProduitPanier(produit,quantite) { 
           console.log({produit ,quantite});
            this.$store.dispatch("checkProduitPanier",{produit ,quantite})
        }
        

    },
    created() {
       
    },
    computed: {
          ...mapState ([
            "produits",
            "produit"
        ]),
        
    }

}
</script>

<style scoped>

div {
    min-height: 20vh;
    background-color: red;
}

</style>