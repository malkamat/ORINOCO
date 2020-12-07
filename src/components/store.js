import Vue from 'vue'
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produits : [],
        panier : [],
        produit : null

    },

    mutations: {
        ADD_TO_BASKET(state,produit) {
           state.panier.push(produit)
        },
        CHANGE_QUANTITY(state,obj) {
            obj.panierProduit.quantite = obj.nouvelleQuantite
         },

         SET_PRODUCTS(state, produits) {
             state.produits = produits
         },
         SET_PRODUCT(state, produit) {
             state.produit = produit
         },
         REMOVE_PRODUCT(state, index) {
           state.panier.splice(index,1)
        },
  
        
    },


    actions: {
        loadAllProducts ({commit},categorie) {
            console.log(categorie.categorie);
            axios.get(`http://localhost:3000/api/${categorie.categorie}`)
            .then(data => {
                console.log(data.data)
                let produits = data.data
                commit("SET_PRODUCTS",produits)

            })
            .catch(error => {
                console.log(error);
            })
        },
        loadSingleProduct ({commit},params) {
            axios.get(`http://localhost:3000/api/${params.categorie}/${params.id}`)
            .then(data => {
                console.log(data.data)
                let produit = data.data
                commit("SET_PRODUCT",produit)

            })
            .catch(error => {
                console.log(error);
            })
        },
       
        checkProduitPanier (context,{produit,quantite}) {
                const panierProduit = context.state.panier.find(item => item.produit === produit._id)
                console.log(panierProduit);
                if(!panierProduit) {
                context.commit("ADD_TO_BASKET",{produit : produit._id,quantite})
                } else {
                     let nouvelleQuantite = quantite
                    context.commit("CHANGE_QUANTITY",{panierProduit,nouvelleQuantite})
                    
                }
        },

    

    }
})