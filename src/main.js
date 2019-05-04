import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueStorage from 'vue-localstorage'

axios.defaults.baseURL = 'https://swapi.co/api/';
Vue.config.productionTip = false

Vue.use(vueStorage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
