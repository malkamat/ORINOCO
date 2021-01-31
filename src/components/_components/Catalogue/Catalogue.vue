<template>
    <section class="border-top section-main bg padding-y">
        <div class="container">

            <div class="row">
                <aside class="col-md-3 mb-5 mt-5">
                    <div class="card">
                        <article class="filter-group">
                            <header class="card-header">

                                    <h6 class="title text-secondary">Séléctionnez une gamme :</h6>
                               
                            </header>
                      
                                <div class="card-body">
                                       <button @click="afficherAllProduits(obj.categorie)" class="m-3 btn-dark" :key="index" v-for="(obj,index) in catalogue">{{obj.titre}}</button>

                                </div> <!-- card-body.// -->

                        </article> <!-- filter-group  .// -->
                        
                    </div>
                </aside> <!-- col.// -->
                <main class="row col-md-9 mt-5">
                       <div :key="index" v-for="(produit,index) in produits" class="col-md-6">
                          <div  class=" mb-3 card  h-10">
                          <a @click="afficherSingleProduit(currentCat,produit._id)" ><img class="card-img-top" :src="produit.imageUrl" alt="image du produit"></a>
                       <div class="card-body">
                            <h4 class="card-title">
                              <a class="text-dark" @click="afficherSingleProduit(currentCat,produit._id)">{{produit.name}}</a>
                            </h4>
                            <p>{{convertPrice(produit.price)}}</p>
                            <p class="card-text">{{produit.description}}</p>
                </div>
                    <div class="card-footer">
                     <small class="text-muted">★ ★ ★ ★ ☆</small>
                     </div>
                    </div>
                </div> <!-- col.// -->
                </main>
             
            </div> <!-- row.// -->
        </div> <!-- container //  -->
    </section>
</template>

<script>
import {mapState} from "vuex"
import {convertPrice} from "../../../mixins/ConvertPrice"

    export default {
        name: "Catalogue",
        mixins : [convertPrice],
         data() {
        return {
             catalogue: [
            {titre:"OriTeddies",categorie:"teddies"},
            {titre:"OriCameras",categorie:"cameras"},
            {titre:"OriFurniture",categorie:"furniture"},

        ],
           
        }
    },
    methods: {
      
        afficherAllProduits(e) {  
            this.$store.dispatch("loadAllProducts" ,{categorie : e}) 
            this.$store.state.currentCat = e
        },
        afficherSingleProduit(categorie,id) { 
            this.$router.push(`/${categorie}/${id}`)    
        },
   
        

    },

    computed: {
          ...mapState ([
            "produits",
            "currentCat"
        ]),
        
    }


    }
</script>

<style scoped src="./Catalogue.css">

</style>