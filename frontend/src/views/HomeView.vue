<script setup lang="ts">
import RegisterHotel from '../components/RegisterHotel.vue'
import { useHotelStore } from '@/stores/counter'
import { defineComponent, onMounted } from 'vue'
import { columnsHotel } from '@/interfaces'
import TableTanstack from '@/components/TableTanstack.vue'


</script>

<template>
  <main>
    <div
      class="hero bg-cover bg-center h-screen"
      style="
        background-image: url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      "
    >
      <div class="container mx-auto flex items-center justify-center h-full">
        <div class="bg-white p-8 rounded shadow-lg max-w-md">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Datos del Hotel</h1>
          <RegisterHotel />
        </div>
      </div>
    </div>
  </main>
</template>