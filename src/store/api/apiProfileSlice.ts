import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FormValue } from "../../utils/interfaces";

export const BASE_URL = "http://localhost:3001"

export const apiProfileSlice = createApi({
  reducerPath: 'apiProfile',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Profile'],
  endpoints: builder => ({
    getUser: builder.query<FormValue, void>({
      query: () => ({
        url: '/users/me'
      }),
      providesTags: result => ['Profile'],
    }),
  })
})

export const { useGetUserQuery } = apiProfileSlice;