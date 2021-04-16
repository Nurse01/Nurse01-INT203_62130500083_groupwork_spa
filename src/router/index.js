import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import Order from '@/views/Order.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
   },
   {
    path: '/products',
    name: 'Products',
    component: Products
   },
   {
    path: '/order',
    name: 'Order',
    component: Order
   }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
