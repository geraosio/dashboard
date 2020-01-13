import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as netlifyIdentityWidget from 'netlify-identity-widget'
import GoTrue from 'gotrue-js'

Vue.config.productionTip = false

//
// Netlify Config
//
// Initialize Netlify Identity
netlifyIdentityWidget.init()
// Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: 'https://geraosio-dashboard.netlify.com/.netlify/identity',
  setCookie: true // Remember that the user is logged in
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
