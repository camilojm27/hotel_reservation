<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";

const props = defineProps({
  id: Number,
  model: String,
})
</script>

<template>

    <a :href="`/${model}/${id}/edit`" class="text-indigo-600 hover:text-indigo-500"
    >
      <Button>
        Editar
      </Button>

    </a
    >
</template>
