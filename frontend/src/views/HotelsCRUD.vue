<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { columnsHotel } from '@/interfaces'
import TableTanstack from '@/components/TableTanstack.vue'
import { useHotelStore } from "@/stores/counter";

export default defineComponent({
  name: 'HotelsCRUD',
  methods: {
    columnsHotel() {
      return columnsHotel
    }
  },
  components: { TableTanstack },
  setup() {
    const store = useHotelStore()
    onMounted(() => {
      store.fetchHotels()
    })
    // return the products to the template
    return {
      store
    }
  },
  computed: {
    hotels() {
      return this.store.getHotels
    }
  }
})
</script>

<template>
  <div class="container py-10 mx-auto">
    <div v-if="hotels == null">
      <p>There are 0 hotels available.</p>
    </div>
    <TableTanstack v-else :data="hotels" :columns="columnsHotel()" />
  </div>
</template>

<style scoped></style>