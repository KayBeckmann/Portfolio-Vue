import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/impressum', component: ()=>import('./views/ImpressumView.vue') },
    { path: '/dsgvo', component: ()=>import('./views/DsgvoView.vue')},
  ]
})

export default router