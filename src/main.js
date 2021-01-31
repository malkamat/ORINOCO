import Vue from 'vue'
import Vuex from 'vuex'
import store from "./components/store"
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "vue-router"
import routes from "./components/routes"
import Vuelidate from "vuelidate"


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuelidate)



const router = new VueRouter({
  routes: routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
