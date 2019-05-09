import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
axios.defaults.baseURL = 'https://swapi.co/api/';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
