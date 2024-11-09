import { createWebHistory, createRouter } from 'vue-router'

import Home from '@pages/Home.vue'
import Join from '@pages/Join.vue'
import Shelters from '@pages/Shelters.vue'
import Payment from '@pages/Payment.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/join', component: Join },
  { path: '/shelters', component: Shelters },
  { path: '/payment', component: Payment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router