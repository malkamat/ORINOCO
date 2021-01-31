<template>
    <aside class="col-lg-3">

        <div class="card mb-3">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label>Prénom</label>
                        <div class="input-group">
                            <input v-model="contact.firstName" @blur="$v.contact.firstName.$touch()" type="text"
                                class="form-control" name="firstName" placeholder="Prénom">
                        </div>
                        <small v-if="!$v.contact.firstName.required" class="form-text text-danger">* ce champ est
                            requis.</small>

                    </div>
                    <div class="form-group">
                        <label>Nom</label>
                        <div class="input-group">
                            <input v-model="contact.lastName" @blur="$v.contact.firstName.$touch()" type="text"
                                class="form-control" name="lastName" placeholder="Nom">
                        </div>
                        <small v-if="!$v.contact.lastName.required" class="form-text text-danger">* ce champ est
                            requis.</small>

                    </div>
                    <div class="form-group">
                        <label>Adresse</label>
                        <div class="input-group">
                            <input v-model="contact.address" @blur="$v.contact.firstName.$touch()" type="text"
                                class="form-control" name="address" placeholder="Adresse">
                        </div>
                        <small v-if="!$v.contact.address.required" class="form-text text-danger">* ce champ est
                            requis.</small>
                    </div>
                    <div class="form-group">
                        <label>Ville</label>
                        <div class="input-group">
                            <input v-model="contact.city" @blur="$v.contact.firstName.$touch()" type="text"
                                class="form-control" name="city" placeholder="Ville">
                        </div>
                        <small v-if="!$v.contact.city.required" class="form-text text-danger">* ce champ est
                            requis.</small>

                    </div>
                    <div class="form-group">
                        <label>e-mail</label>
                        <div class="input-group">
                            <input v-model="contact.email" @blur="$v.contact.firstName.$touch()" type="email"
                                class="form-control" name="email" placeholder="e-mail">
                        </div>
                        <template v-if="!$v.contact.email.$error">
                            <small v-if="!$v.contact.email.required" class="form-text text-danger">* ce champ est
                                requis.</small>
                            <small v-else-if="!$v.contact.email.email" class="form-text  text-danger">* entrez une
                                addresse mail valide.</small>

                        </template>

                    </div>
                    <div class="card">
                        <div class="card-body">
                            <dl class="dlist-align">
                                <dt>Prix Total:</dt>
                                <dd class="text-right">{{convertPrice(getTotalPanier)}}</dd>
                                <dd v-if="panier.length == 0" class="text-right">remplissez votre panier avant de passer
                                    commande</dd>
                            </dl>

                            <hr>
                            <p class="text-center mb-3">
                                <i class="fas fa-credit-card"></i>
                            </p>
                            <button @click.prevent="commander" :disabled="$v.contact.$invalid || panier.length == 0"
                                type="submit" class="btn btn-success btn-block">
                                Passer la
                                commande </button>
                            <router-link to="/" class="btn btn-primary btn-block">Continuer mes achats
                            </router-link>
                        </div> <!-- card-body.// -->
                    </div> <!-- card.// -->
                </form>
            </div> <!-- card-body.// -->
        </div> <!-- card.// -->



    </aside> <!-- col.// -->
</template>

<script>
import {mapState} from "vuex"

    import {
        convertPrice
    } from '../../../mixins/ConvertPrice'
    import {
        required,
        email
    } from 'vuelidate/lib/validators'
    export default {
        name: "FormulairePaiement",
        mixins: [convertPrice],
        data() {
            return {
                contact: {
                    firstName: null,
                    lastName: null,
                    address: null,
                    city: null,
                    email: null,
                }
            }
        },
        validations: {

            contact: {

                firstName: {
                    required,
                },
                lastName: {
                    required,
                },
                address: {
                    required,
                },
                city: {
                    required,
                },
                email: {
                    required,
                    email
                },
            }



        },
        methods: {
            commander() {
                this.$store.dispatch("checkOut", this.contact)
                this.$store.commit("CLEAN_BASKET")
                this.$router.push(`/confirmation`)


            }
        },
        computed: {
                ...mapState ([
            "panier"
        ]), 
            getTotalPanier() {
                return this.$store.getters.getTotalPanier
            }
        }

    }
</script>

<style>

</style>