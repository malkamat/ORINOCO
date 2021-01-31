<template>
   <header id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
    <li data-target="#carousel-example-2" data-slide-to="3"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100" src="http://localhost:3000/images/atelier.jpg"
          alt="devanture du magasin">
        <div class="mask rgba-black-light"></div>
      </div>
      <div class="carousel-caption">
        <h1 class="h1-responsive">Orinoco</h1>
        <p>Bienvenue sur notre boutique en ligne</p>
      </div>
    </div>
    <div :key="index" v-for="(slide,index) in slider" class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <img class="d-block w-100" :src="slide.urlImg"
          :alt="slide.texte">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">{{slide.titre}}</h3>
        <p>{{slide.texte}}</p>
      </div>
    </div>
  
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</header>
<!--/.Carousel Wrapper-->
</template>

<script>
export default {
    name: "HeaderAccueil",
    data() {
        return {
              slider: [
          {titre: "OriTeddies",texte: "Des ours en Peluche",urlImg : 'http://localhost:3000/images/teddy_2.jpg'},
          {titre: "OriFurniture",texte: "Des meubles fait main",urlImg : 'http://localhost:3000/images/oak_2.jpg'},
          {titre: "OriCameras",texte: "Des appareils photo vintage",urlImg : 'http://localhost:3000/images/vcam_4.jpg'},
        ]
        }
    }

}
</script>

<style scoped src="./HeaderAccueil.css">

</style>