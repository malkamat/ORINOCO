<template>
  <section class="row">

        <main class="col container p-5 mt-5">
            <article class="card">
                <header class="card-header">
                    <h2 class="d-inline-block mr-3">Confirmation de votre commande :</h2>
                    <span> {{calculerDate(today)}}</span>
                </header>
                <div v-if="reponse.length > 0" class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h6 class="text-muted">Addresse de livraison</h6>
                            <p>{{reponse[0].contact.lastName}} {{reponse[0].contact.firstName}}<br>
                                email : {{reponse[0].contact.email}}<br>
                                adrresse : {{reponse[0].contact.address}} <br>
                                ville : {{reponse[0].contact.city}}
                            </p>
                        </div>
                        <div class="col-md-4">
                            <h6 class="text-muted">Payment</h6>
                            <span class="text-success">
                                <i class="fab fa-lg fa-cc-visa"></i>
                                Visa **** 4216
                            </span>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tbody :key="index" v-for="(categorie,index) in reponse">
                            <tr :key="index" v-for="(produit,index) in categorie.products">
                                <td width="65">
                                    <img :src="produit.imageUrl" class="img-xs border">
                                </td>
                                <td>
                                    <p class="title mb-0">{{produit.name}}</p>
                                    <var class="price text-muted">{{convertPrice(produit.price)}} l'unitée</var>
                                </td>
                                <td> ID de commande :<br>{{categorie.orderId}} </td>
                                <td width="250"> <a href="#" class="btn btn-outline-dark">Suivre ma commande</a> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article> <!-- order-group.// -->
        </main>
    </section>
</template>

<script>

import {mapState} from "vuex"
import { convertPrice } from '../../mixins/ConvertPrice'
    export default {
        name: "Confirmation",
        mixins : [convertPrice],


        data() {
            return {
                today: new Date(),
            }
        },
        methods: {
            calculerDate(today) {
                let date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
                let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
                return `Commande passée le ${date} à ${time}`
            },
        },


        created() {

       
        },
        computed : {
          ...mapState ([
            "reponse"
        ]),

        }
     
    }
</script>

<style scoped src="./Confirmation.css">

</style>

