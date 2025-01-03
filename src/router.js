import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ImpressumView from './views/ImpressumView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/impressum', component: ImpressumView },
  ]
})

export default router