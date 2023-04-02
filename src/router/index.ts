import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main.vue'
import ProductPage from "@/views/ProductPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:id',
      name: 'product-page',
      component: ProductPage
    },
  ]
})

export default router
