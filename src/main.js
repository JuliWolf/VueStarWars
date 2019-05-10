import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'
import store from './store'
import theme from './themes/customThemes.js'

Vue.use(Vuetify, {theme} );
axios.defaults.baseURL = 'https://swapi.co/api/';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
