import Vue from 'vue'
import Router from 'vue-router'
import mainInfo from './components/clients/mainInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainInfo',
      component: mainInfo
    },
    // {
    //   path: '/planets',
    //   name: 'planets',
    //   component: () => import('./components/clients/mainInfo.vue')
    // }

  ]
})
