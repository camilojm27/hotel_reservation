import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotelsCRUD from "../views/HotelsCRUD.vue";
import BookingsCRUDVue from '@/views/BookingsCRUD.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView

    },
    {
      path: '/hotels',
      name: 'HotelsCRUD',
      component: HotelsCRUD
    },
      {
      path: '/bookings',
      name: 'BookingsCRUD',
      component: BookingsCRUDVue
    },
  ]
})

export default router
