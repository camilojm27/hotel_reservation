<script setup lang="ts">

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {Button} from "@/components/ui/button";
import { useHotelStore } from "@/stores/counter";
const store = useHotelStore()
const props = defineProps({
  id: Number,
  model: String,
})

</script>

<template>
    <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="default">
            Eliminar
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estas segur@ de querer eliminar la reserva {{id}}?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer y va a eliminar completamente la reserva de la base de datos
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction @click="store.delete(<number>id, <string>model)">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
</template>
