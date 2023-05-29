import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '/dynamic', name: 'dynamic', component: () => import('../views/Dynamic.vue') },
    { path: '/async', name: 'async', component: () => import('../views/Async.vue') },
    { path: '/transition', name: 'transition', component: () => import('../views/Transition.vue') },
    { path: '/teleports', name: 'teleports', component: () => import('../views/Teleports.vue') },
    { path: '/cycle', name: 'cycle', component: () => import('../views/LifeCycle.vue') },
    { path: '/ref', name: 'ref', component: () => import('../views/Ref.vue') },
  ]
})

export default router