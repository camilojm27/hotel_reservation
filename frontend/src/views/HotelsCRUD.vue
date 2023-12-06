<script lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axiosInstance from '@/lib/axios'
import { useToast } from '@/components/ui/toast'
export default {
  components: { FormControl, FormLabel, FormItem, FormField, FormMessage, Button, Input},
  data() {
    return {
      hotels: null
    }
  },
  setup() {
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
      axiosInstance
        .put('/hotels/1', values)
        .then((response) => {
          if (response.status == 200) {
            toast({
              title: 'Hotel Actualizado',
              description: 'El hotel ha sido actualizado correctamente'
            })
          }
        })
        .catch((reason) => {
          toast({
            title: 'Error',
            description: 'No es posible crear el hotel en este momento, intenta más tarde',
            variant: 'destructive'
          })
        })
      console.log('Form submitted!', values)
    })

    return { form, onSubmit }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        axiosInstance.get('/hotels/1').then((response) => {
          this.hotels = response.data
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

<template>
  <div>
    <h2 class="text-center mb-2">Actualizar Información del Hotel</h2>
    <p v-if="hotels == null">No tienes hoteles registrados, ve al inicio</p>

    <form v-else @submit.prevent="onSubmit" class="grid grid-cols-2 gap-4 container">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Nombre del hotel</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.name"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="address" class="">
        <FormItem>
          <FormLabel>Dirección</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.address" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="country">
        <FormItem>
          <FormLabel>País</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.country" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="state">
        <FormItem>
          <FormLabel>Estado/Departamento</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.state" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="city">
        <FormItem>
          <FormLabel>Ciudad/Municipio</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.city" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="nit">
        <FormItem>
          <FormLabel>NIT</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.nit" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="phone">
        <FormItem>
          <FormLabel>Teléfono</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model:model-value="hotels.phone" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button class="col-span-2" type="submit"> Registrar Hotel </Button>
    </form>

  </div>
</template>