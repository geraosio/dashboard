import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
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
    path: '/team',
    name: 'team',
    component: Team
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
