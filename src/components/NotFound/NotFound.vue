<template>
    <section class="section-erreur">
        <h1 class="h1-responsive text-danger">Cette page n'existe pas</h1>
        <img src="../../../back-end/images/404.jpg" alt="image d'erreur de page web non trouvée">
        <router-link to="/" class="btn btn-danger">Retour à la boutique</router-link>
    </section>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style>

</style>