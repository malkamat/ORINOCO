<template>
   <div class="container mt-5">


  <!--Section: Content-->
  <section class="mb-5">

    <!-- Section heading -->
    <h3 class="pt-5 text-center font-weight-bold mb-5">{{produit.name}}</h3>

      <article class="card card-body mb-3">
				<div class="row align-items-center">
					<div class="col-md-6">
						<figure class="itemside">
							<div class="aside"><img :src="produit.imageUrl" class="border img-sm"></div>
							<figcaption class="info">
								<span class="text-muted">{{$route.params.categorie}}</span>
								<p>{{produit.description}} </p>
							</figcaption>
						</figure> 
					</div> <!-- col.// -->
					<div class="col-md-3"> 
						<div class="input-group input-spinner">
							<div class="input-group-prepend">
							<button v-if="nbProduit > 1" @click="nbProduit--" class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
							</div>
							<input type="text" class="form-control" :value="nbProduit">
							<div class="input-group-append">
							<button v-if="nbProduit < 10" @click="nbProduit++" class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
							</div>
						</div> <!-- input-group.// -->
            
					</div> <!-- col.// -->
          
					<div class="col">
						<div class="price h5">{{convertPrice(produit.price * nbProduit)}}</div>
					</div>

          <!-- form -->
					<div v-if="produit.varnish||produit.colors||produit.lenses" class="form-group ml-3">
							<label class="text-muted">Option :</label>
							<div>
                    <label class="js-check btn btn-check active">
                    <input v-model="optionSelected" checked="checked" type="radio" name="option" >
                    <span>{{"Aucune option"}}</span>
                  </label>
								<label  :key="index" v-for="(option,index) in produit.varnish||produit.colors||produit.lenses"  class="js-check btn btn-check active">
									<input v-model="optionSelected" type="radio" name="option" :value="option">
									<span>{{option}}</span>
								</label>
							
							</div>						
						</div>
            <div class="form-group col-md">
						<a @click="ajouterAuPanier(produit,nbProduit,$route.params.categorie)" class="btn btn-primary"> <span class="text">Ajouter au panier</span> <i class="fas fa-shopping-cart"></i> </a>
					</div>
				</div> <!-- row.// -->
			</article>
  </section>
  <!--Section: Content-->


</div>
</template>

<script>
import { convertPrice } from '../../mixins/ConvertPrice'
import {mapState} from "vuex"
export default {
  name: "Produit",
  mixins: [convertPrice],
  data() {
    return {
      nbProduit: 1,
      optionSelected : ""

    }
  },
  created() {
    this.$store.dispatch("loadSingleProduct" ,{categorie : this.$route.params.categorie, id : this.$route.params.id })  

  },
  methods : {
        ajouterAuPanier(produit,quantite,categorie) { 
          console.log(produit,quantite,categorie);
            this.$store.dispatch("checkProduitPanier",{produit ,quantite,categorie})
            this.$router.push("/panier")
        },
        
  },
    computed: {
          ...mapState ([
            "produit"
        ]),
        
    }

}
</script>

<style scoped src="./Produit.css">

</style>