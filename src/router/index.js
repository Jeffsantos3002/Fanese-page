import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sobre from '../views/Sobre.vue'
import Contatos from '@/views/Contato.vue'
import Cursos from '@/views/Cursos.vue'
import Noticias from '@/views/Noticias.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contatos
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: Noticias
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
