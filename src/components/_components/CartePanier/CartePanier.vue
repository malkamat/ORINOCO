<template>
   <aside class="col-lg-9">
                        <div class="card">
                            <table class="table-responsive table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Article</th>
                                        <th scope="col" width="120">Quantitée</th>
                                        <th scope="col" width="120">Prix</th>
                                        <th scope="col" class="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                <tbody class="border-top" :key="index" v-for="(article,index) in panier">
                                    <tr>
                                        <td>
                                            <figure class="itemside align-items-center">
                                                <div class="aside"><img :src="article.produit.imageUrl" class="img-sm"></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">{{article.produit.name}}</a>
                                                </figcaption>
                                            </figure>
                                               <small href="#" class="title text-muted">{{article.categorie}}</small>

                                        </td>
                                        <td>
                                            <strong class="quantite">{{article.quantite}}</strong>

                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <strong class="price">{{convertPrice(article.produit.price * article.quantite)}}</strong><br>
                                                <small class="text-muted"> {{convertPrice(article.produit.price)}} / unitée </small>
                                            </div> <!-- price-wrap .// -->
                                        </td>
                                        <td class="text-right">
                                            <button @click="supprimerArticle(index)" 
                                                class="btn btn-outline-danger">
                                                Supprimer </button>
                                            <button @click="modifierArticle(article.categorie,article.produit._id)"
                                               class="btn btn-outline-dark mt-3">
                                                Modifier </button>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                            <div class="card-body col border-top">
                                <p v-if="panier.length > 0" class="icontext "><i class="icon text-success fa fa-truck"></i> Livraison gratuite !</p>
                                <p v-else class="icontext"><i class="icon   text-danger fa fa-frown"></i> Votre panier est vide !</p>
                                 <button v-if="panier.length > 0" @click="viderPanier()"
                                               class="btn btn-outline-danger col mb-3">
                                                Vider mon panier </button>
                                <router-link class=" btn col btn-primary" to="/"> continuer mes achats</router-link>
                                 
                            </div> <!-- card-body.// -->

                        </div> <!-- card.// -->



                    </aside> <!-- col.// -->
</template>

<script>
import {mapState} from "vuex"

    import {
        convertPrice
    } from '../../../mixins/ConvertPrice'
 export default {
        name: "FormulairePaiement",
        mixins: [convertPrice],
        methods : {
            
        modifierArticle(categorie,id) {
          this.$router.push(`/${categorie}/${id}`)

        },
          supprimerArticle(index) {
            this.$store.commit("REMOVE_PRODUCT",index)
        },
          viderPanier() {
            this.$store.commit("CLEAN_BASKET")
        },

        },
        computed  : {
             ...mapState ([
            "panier"
        ]),  
        }
}
</script>

<style scoped>
img {
  height: 150px;
}

</style>