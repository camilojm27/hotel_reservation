<template>
  <div class="relative">
    <input
      v-model="hotelStore.selectedItem"
      @input="filterClients"
      @focus="showDropdown"
      @blur="hideDropdown"
      class="border p-2 w-full"
      placeholder="Search clients"
    />
    <div v-if="hotelStore.showSuggestions" class="absolute top-10 bg-white border w-full">
      <ul class="list-none p-0 m-0">
        <li
          v-for="client in hotelStore.filteredClients"
          :key="client.id"
          @click="selectClient(client)"
          class="cursor-pointer p-2 hover:bg-gray-200"
        >
          {{ client.fullname }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useHotelStore } from '@/stores/useHotelStore';

export default defineComponent({
  name: "ClientAutocomplete",
  setup() {
    const hotelStore = useHotelStore();

    const filterClients = () => {
      hotelStore.showSuggestions = true;
    };

    const showDropdown = () => {
      hotelStore.showSuggestions = true;
    };

    const hideDropdown = () => {
      hotelStore.$nextTick(() => {
        hotelStore.showSuggestions = false;
      });
    };

    const selectClient = (client) => {
      hotelStore.selectedItem = client.fullname;
      hotelStore.showSuggestions = false;
    };

    // Fetch clients when the component is mounted
    onMounted(() => {
      hotelStore.fetchClients();
    });

    // Clean up and reset when the component is unmounted
    onUnmounted(() => {
      hotelStore.selectedItem = '';
      hotelStore.showSuggestions = false;
    });

    return {
      hotelStore,
      filterClients,
      showDropdown,
      hideDropdown,
      selectClient,
    };
  },
});
</script>

<style scoped>
/* Add Tailwind CSS classes as needed */
</style>
