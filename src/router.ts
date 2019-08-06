import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NavBar from './components/NavBar.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: Home
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: '/about',
      name: 'about',
      components: {
        header: NavBar,
        content: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/teaching',
      name: 'teaching',
      components: {
        header: NavBar,
        content: () => import(/* webpackChunkName: "teaching" */ './views/Teaching.vue')
      }
    },
    {
      path: '/art',
      name: 'art',
      components: {
        header: NavBar,
        content: () => import(/* webpackChunkName: "art" */ './views/Art.vue')
      }
    },
    {
      path: '/diy-hanging-planters',
      name: 'diy-hanging-planters',
      components: {
        header: NavBar,
        content: () => import(/* webpackChunkName: "hangingPlanters" */ './views/HangingPlanters.vue')
      }
    }
  ]
})
