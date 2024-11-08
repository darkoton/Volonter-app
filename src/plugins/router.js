import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import Join from '@/pages/Join.vue'
import Shelters from '@/pages/Shelters.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/join', component: Join },
  { path: '/shelters', component: Shelters },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router