import Vue from 'vue'
import Router from 'vue-router'
import StarWars from './components/clients/StarWars.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('./components/clients/Welcome.vue')
    },
    {
      path: '/StarWars',
      name: 'StarWars',
      component: StarWars
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('./components/clients/showHistory/historyPanel.vue')
    },



  ]
})
