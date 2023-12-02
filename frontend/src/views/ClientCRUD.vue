<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useHotelStore } from '@/stores/counter'
import { columnsClient } from "@/interfaces";
import TableTanstack from '@/components/TableTanstack.vue'

export default defineComponent({
  name: 'ClientCRUD',
  methods: {
    columnsClient() {
      return columnsClient
    },
  },
  components: { TableTanstack },
  setup() {
    const store = useHotelStore()
    onMounted(() => {
      store.fetchClients()
    })
    return {
      store
    }
  },
  computed: {
    clients() {
      return this.store.getClients
    }
  }
})
</script>

<template>
  <div class="">
    <div v-if="clients == null">
      <p>There are 0 bookings.</p>
    </div>
    <TableTanstack v-else :data="clients" :columns="columnsClient()" />
  </div>
</template>

<style scoped></style>