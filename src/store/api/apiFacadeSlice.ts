import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Facade } from "../../models/models"

export const BASE_URL = "http://localhost:3001"

export const apiFacadeSlice = createApi({
  reducerPath: 'apiFacade',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Facade'],
  endpoints: builder => ({

    getFacades: builder.query<Facade[], void>({
      query: () => ({
        url: '/facades'
      }),
      providesTags: result => ['Facade'],
    }),

    postFacade: builder.mutation<Facade, Partial<Facade>>({
      query: (facade) => ({
        url: '/facades',
        method: 'POST',
        body: facade,
      }),
      invalidatesTags: ['Facade'],
    }),

    deleteFacade: builder.mutation<Facade, Partial<Facade>>({
      query: (facade) => ({
        url: `/facades/${facade._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Facade'],
    }),

  })
})

export const { useGetFacadesQuery, usePostFacadeMutation, useDeleteFacadeMutation } = apiFacadeSlice;