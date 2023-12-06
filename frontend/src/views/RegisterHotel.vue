<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/toast";
import router from "@/router";
const { toast } = useToast()
const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    state: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    nit: z.string().min(2).max(50),
    phone: z.string().min(2).max(50).optional()
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {

    axiosInstance.post('/hotels', values)
        .then(response => {
          if (response.status == 201){
            toast({
              title: 'Hotel Creado',
              description: 'El hotel ha sido creado correctamente',
            });
          }
          router.push('/bookings')

        }).catch(reason => {

      toast({
        title: 'Error',
        description: 'No es posible crear el hotel en este momento, intenta más tarde',
        variant: 'destructive',
      });
    })
  console.log('Form submitted!', values)
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="grid grid-cols-2 gap-4">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Nombre del hotel</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="address" class="">
      <FormItem>
        <FormLabel>Dirección</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="country">
      <FormItem>
        <FormLabel>País</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="state">
      <FormItem>
        <FormLabel>Estado/Departamento</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="city">
      <FormItem>
        <FormLabel>Ciudad/Municipio</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="nit">
      <FormItem>
        <FormLabel>NIT</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel>Teléfono</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button class="col-span-2" type="submit"> Registrar Hotel </Button>
  </form>
</template>
