import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz1  from '../views/Quiz1.vue'
import Quiz2  from '../views/Quiz2.vue'
import Final  from '../views/Final.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quiz/1/:question',
    name: 'quiz1',
    component: Quiz1
  },
  {
    path: '/quiz/2/:question',
    name: 'quiz2',
    component: Quiz2
  },
  {
    path: '/quiz/3/:question',
    name: 'quiz3',
    component: Quiz3
  },
  {
    path: '/final',
    name: 'final',
    component: Final 
  }

]

const router = new VueRouter({
  routes
})

export default router
