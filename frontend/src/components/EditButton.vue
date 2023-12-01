<script setup lang="ts">
const props = defineProps({
  id: Number,
  model: String,
})
</script>

<template>
  <a :href="`/${model}/${id}/edit`" class="text-indigo-600 hover:text-indigo-500"
    >Edit</a
  >
</template>
