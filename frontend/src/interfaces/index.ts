import type { ColumnDef } from '@tanstack/vue-table'
import { h } from "vue";
import EditButton from "@/components/EditButton.vue";
import DeleteButton from "@/components/DeleteButton.vue";
export interface Hotel {
  id: number
  name: string
  address: string
  country: string
  state: string
  nit: string
  phone: string
  created_at: Date
  updated_at: Date
}
export const columnsHotel: ColumnDef<Hotel>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'nit',
    header: 'NIT',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
    //TODO: Cast

  },
  {
    accessorKey: 'updated_at',
    header: 'Updated At',
    // cell: info => new Date(Date.parse(info.getValue())),

  },
  {
    accessorKey: 'edit',
    header: ' ',
    cell: ({ row }) => h(EditButton, { id: row.original.id,model:'hotels' }),
    enableSorting: false,
  },
    {
    accessorKey: 'delete',
    header: ' ',
    cell: ({ row }) => h(DeleteButton, { id: row.original.id,model:'hotels' }),
    enableSorting: false,
  }
]

export interface Client {
  id: number
  fullname: string
  personal_id: string
  created_at: Date
  updated_at: Date
}

export interface Booking {
  id: number
  client: Client
  hotel: Hotel
  number_of_people: number
  arrived_date: Date
  number_of_nights: number
  departure_date: Date
  price: number
  updated_at: Date
  created_at: Date
}
export const columnsBooking: ColumnDef<Booking>[] = [
  {
    accessorKey: 'client',
    header: 'Client',
  },
  {
    accessorKey: 'hotel',
    header: 'Hotel',
  },
  {
    accessorKey: 'number_of_people',
    header: 'Number of People',
  },
  {
    accessorKey: 'arrived_date',
    header: 'Arrived Date',
  },
  {
    accessorKey: 'number_of_nights',
    header: 'Number of Nights',
  },
  {
    accessorKey: 'departure_date',
    header: 'Departure Date',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
    //TODO: Cast
  },
  {
    accessorKey: 'updated_at',
    header: 'Updated At',
    // cell: info => new Date(Date.parse(info.getValue())),
  },
  {
    accessorKey: 'edit',
    header: ' ',
    cell: ({ row }) => h(EditButton, { id: row.original.id, model: 'bookings' }),
    enableSorting: false,
  },
  {
    accessorKey: 'delete',
    header: ' ',
    cell: ({ row }) => h(DeleteButton, { id: row.original.id, model: 'bookings' }),
    enableSorting: false,
  }
]


export interface store {
  hotels: Hotel[] | null;
  bookings: Booking[] | null;
  clients: Client[] | null;
}
