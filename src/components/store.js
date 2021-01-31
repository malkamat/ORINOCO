import Vue from 'vue'
import Vuex from "vuex"
import axios from "axios"
//import du plugin servant à afficher le contenu sauvegardé du panier
import {
    panierLocalStorage
} from "../plugin/localStorage"

Vue.use(Vuex)

// Si il y a des articles dans le localStorage panier = [localStorage] sinon panier = []
const panier = JSON.parse(localStorage.getItem("panier")) || []


export default new Vuex.Store({
    plugins: [panierLocalStorage],
    state: {
        //catalogue pour associer categorie de l'API et catalogue Orinoco
        catalogue: [{
                titre: "OriTeddies",
                categorie: "teddies"
            },
            {
                titre: "OriCameras",
                categorie: "cameras"
            },
            {
                titre: "OriFurniture",
                categorie: "furniture"
            },

        ],
        // tous les produits chargé dans le catalogue
        produits: [],
        panier,
        // reponse de la commande POST lors de la commande
        reponse: [],
        produit: null,
        currentCat: null

    },

    //MUTATIONS
    mutations: {
        ADD_TO_BASKET(state, produit) {
            state.panier.push(produit)
        },
        CHANGE_QUANTITY(state, obj) {
            obj.panierProduit.quantite = obj.nouvelleQuantite
        },
        SET_PRODUCTS(state, produits) {
            state.produits = produits
        },
        SET_PRODUCT(state, produit) {
            state.produit = produit
        },
        REMOVE_PRODUCT(state, index) {
            state.panier.splice(index, 1)
        },
        CLEAN_BASKET(state) {
            state.panier = []
        },
        RECAP_COMMANDE(state, recap) {
            state.reponse.push(recap)
        },
        DELETE_RECAP_COMMANDE(state) {
            state.reponse = []
        },


    },

    //ACTIONS
    actions: {
        // Fonction pour charger le catalogue dans le tableau de produits
        loadAllProducts({
            commit
        }, categorie) {
            axios.get(`http://localhost:3000/api/${categorie.categorie}`)
                .then(response => {
                    console.log(response.data)
                    let produits = response.data
                    commit("SET_PRODUCTS", produits)

                })
                .catch(error => {
                    console.log(error);
                })
        },
        //Fonction pour charger le produit à afficher pour la page "/produit"
        loadSingleProduct({
            commit
        }, params) {
            axios.get(`http://localhost:3000/api/${params.categorie}/${params.id}`)
                .then(response => {
                    console.log(response.data)
                    let produit = response.data
                    commit("SET_PRODUCT", produit)

                })
                .catch(error => {
                    console.log(error);
                })
        },

        // Fonction pour check si l'article est déjà dans le panier ou non
        checkProduitPanier({
            state,
            commit
        }, {
            produit,
            quantite,
            categorie
        }) {
            const panierProduit = state.panier.find(item => item.produit._id === produit._id)
            if (!panierProduit) {
                commit("ADD_TO_BASKET", {
                    produit,
                    quantite,
                    categorie
                })
            } else {
                let nouvelleQuantite = quantite
                commit("CHANGE_QUANTITY", {
                    panierProduit,
                    nouvelleQuantite,
                    categorie
                })

            }
        },

        //Fonction de checkout du panier
        checkOut({
            commit,
            state
        }, contact) {
            // on vide l'ancien tableau de recap de commande
            commit("DELETE_RECAP_COMMANDE")
            //fonction de POST de commande
            let postCommande = function test(categorie, contact, products) {
                axios.post(`http://localhost:3000/api/${categorie}/order`, {
                        contact,
                        products
                    })
                    .then(response => {
                        let recap = response.data
                        // on envoie la reponse de l'API dans le tableau reponse
                        commit("RECAP_COMMANDE", recap)

                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
            // créer les tableau comprenants les ID pour passer la commander
            let tableauTeddies = []
            let tableauFurniture = []
            let tableauCameras = []
            state.panier.forEach(item => {
                if (item.categorie === "furniture") {
                    tableauFurniture.push(item.produit._id)
                } else if (item.categorie === "cameras") {
                    tableauCameras.push(item.produit._id)
                } else if (item.categorie === "teddies") {
                    tableauTeddies.push(item.produit._id)
                }
            });

            //Si un des tableau contient au moins 1 article on post la commande
            if (tableauCameras.length > 0) {
                postCommande("cameras", contact, tableauCameras)
            }
            if (tableauFurniture.length > 0) {
                postCommande("furniture", contact, tableauFurniture)
            }
            if (tableauTeddies.length > 0) {
                postCommande("teddies", contact, tableauTeddies)
            }

        },

    },
    //GETTERS
    getters: {
        nombreProduitsPanier(state) {
            let nombreProduitsPanier = 0
            state.panier.forEach(item =>
                nombreProduitsPanier += item.quantite
            )
            return nombreProduitsPanier
        },
        getTotalPanier(state) {
            let total = 0
            state.panier.forEach(item =>
                total += item.quantite * item.produit.price
            )
            return total
        }
    },


})