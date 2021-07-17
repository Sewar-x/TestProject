import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/home.vue'
import exponentPage from '../views/exponent.vue'
Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/exponents',
    name: 'exponents',
    component: exponentPage
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
