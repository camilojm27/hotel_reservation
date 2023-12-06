import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotelsCRUD from '../views/HotelsCRUD.vue'
import BookingsCRUDVue from '@/views/BookingsCRUD.vue'
import { useHotelStore } from '@/stores/counter'
import ClientCRUD from "@/views/ClientCRUD.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const hotelStore = useHotelStore()
        if (!hotelStore.hasHotels) {
          next()
        } else {

          next({ name: 'HotelsCRUD' }) // Replace with the appropriate route
        }
      }
    },
    {
      path: '/hotels/edit',
      name: 'HotelsCRUD',
      component: HotelsCRUD
    },
    {
      path: '/bookings',
      name: 'BookingsCRUD',
      component: BookingsCRUDVue
    },
    {
      path: '/clients',
      name: 'ClientsCRUD',
      component: ClientCRUD
    }
  ]
})

export default router
