import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vue2Storage from 'vue2-storage'

axios.defaults.baseURL = 'https://swapi.co/api/';
Vue.config.productionTip = false

Vue.use(Vue2Storage, {
  prefix: 'local_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
