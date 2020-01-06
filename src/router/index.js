import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import Request from '../views/SignIn/Request.vue'
import Recover from '../views/SignIn/Recover.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/request',
    name: 'request',
    component: Request
  },
  {
    path: '/recover',
    name: 'recover',
    component: Recover
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
