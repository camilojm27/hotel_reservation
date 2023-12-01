import { defineStore } from 'pinia'
import type { store } from '@/interfaces'
import axios from '@/lib/axios'

export const useHotelStore = defineStore('hotelStore', {
  state: () =>
    ({
      hotels: null,
      bookings: null,
      clients: null
    }) as store,

  getters: {
    // return the products as a computed property
    getHotels(): any {
      return this.hotels
    },
    getBookings(): any {
      return this.bookings
    },
  },

  actions: {
    fetchHotels() {
      axios.get('/hotels').then((response) => {
        this.hotels = response.data
      })
    },
    fetchBookings() {
      axios.get('/bookings').then((response) => {
        this.hotels = response.data
      })
    },
    fetchClients() {
      axios.get('/clients').then((response) => {
        this.hotels = response.data
      })
    },
    delete(id: number, model: string) {
      // use the filter method to remove the hotel from the hotels array
      axios.delete(`/${model}/${id}`).then((response => {
        if (response.status == 200){
          this.hotels = this.hotels?.filter(hotel => hotel.id !== id)
        }
      }))
    }
  }
})
