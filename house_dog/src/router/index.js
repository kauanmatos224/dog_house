import { createRouter, createWebHistory } from 'vue-router'
import amicao_view from '../views/home_amicao_view.vue'
import contacts_view from '../views/contacts_view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: amicao_view
    },
    {
      path: '/contacts',
      name: 'contatos',
      component: contacts_view
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about_view.vue')
    }
  ]
})

export default router
