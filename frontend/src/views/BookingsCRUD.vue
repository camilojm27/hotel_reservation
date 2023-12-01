<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useHotelStore } from '@/stores/counter'
import { columnsBooking } from '@/interfaces'
import TableTanstack from '@/components/TableTanstack.vue'

export default defineComponent({
  name: 'BookingsCRUD',
  methods: {
    columnsBooking() {
      return columnsBooking
    }
  },
  components: { TableTanstack },
  setup() {
    const store = useHotelStore()
    onMounted(() => {
      store.fetchBookings()
    })
    return {
      store
    }
  },
  computed: {
    bookings() {
      return this.store.getBookings
    }
  }
})
</script>

<template>
  <div class="">
    <div v-if="bookings == null">
      <p>There are 0 bookings.</p>
    </div>
    <TableTanstack v-else :data="bookings" :columns="columnsBooking()" />
  </div>
</template>

<style scoped></style>