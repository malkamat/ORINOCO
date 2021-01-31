<template>
   <section class="section-content mt-5 padding-y bg">
            <div class="container ">

                <div class="row pt-5">
                  <carte-panier></carte-panier>
                   
                    <formulaire-paiement></formulaire-paiement>


                   

                </div> <!-- row.// -->


            </div> <!-- container .//  -->
        </section>
</template>

<script>
import FormulairePaiement from '../_components/FormulairePaiement/FormulairePaiement'
import CartePanier from '../_components/CartePanier/CartePanier.vue'
export default {
  name: "Panier",
  components: {
    "formulaire-paiement" : FormulairePaiement,
    "carte-panier" : CartePanier
  },
  data() {
    return {

    }
        },
  created() {
   
  },
  methods : {

  },
    computed: {
          
    }
}
</script>

<style scoped>


</style>