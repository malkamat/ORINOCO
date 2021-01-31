<template>
 <div>
  <header-accueil></header-accueil>
  <about></about>
  <catalogue></catalogue>
 </div>
</template>

<script>
import HeaderAccueil from '../_components/HeaderAccueil/HeaderAccueil.vue'
import About from '../_components/About/About.vue'
import Catalogue from '../_components/Catalogue/Catalogue.vue'
export default {
    name: "Accueil",
    components : {
        "header-accueil" : HeaderAccueil,
        "about" : About,
        "catalogue" : Catalogue,
    

    },
    data() {
       return {
     
       }
    }

}
</script>

<style scoped src="./Accueil.css">

</style>