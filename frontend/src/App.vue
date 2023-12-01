<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
</script>

<template>
  <header>
    <nav class="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div class="flex items-center">
        <img
          alt="Hotel Logo"
          src="@/assets/hotel-building-svgrepo-com.svg"
          width="70"
          height="70"
        />
        <span class="text-xl font-bold">Hotel App</span>
      </div>
      <div class="flex items-center space-x-4">
        <router-link to="/" class="hover:bg-gray-700 px-2 py-1 rounded">Home</router-link>
        <router-link to="/hotels" class="hover:bg-gray-700 px-2 py-1 rounded"
          >CrudHotel</router-link
        >
        <router-link to="/bookings" class="hover:bg-gray-700 px-2 py-1 rounded"
          >CrudBookings</router-link
        >
        <router-link to="/clients" class="hover:bg-gray-700 px-2 py-1 rounded"
          >CrudReservations</router-link
        >
      </div>
    </nav>
  </header>
  <main>
    <Toaster />


    <RouterView />
  </main>
</template>

<style scoped></style>
