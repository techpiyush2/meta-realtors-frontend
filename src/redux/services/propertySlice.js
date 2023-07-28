import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertySlice = createApi({
  reducerPath: "propertySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),

  endpoints: (builder) => ({
    getPropertyList: builder.mutation({
      query: (data) => ({
        url: `property/list`,
        method: 'POST',
        body: data,
      }),
    }),
    getPropertyDetails: builder.mutation({
      query: (data) => ({
        url: `property/details`,
        method: 'POST',
        body: data,
      }),
    }),
    getAgencyList: builder.query({
      query: (phrase) => `/agencies/list?query=${phrase}`,
    }),
  }),
});

export const {
  useGetPropertyListMutation,
  useGetPropertyDetailsMutation,
  useGetAgencyListQuery,
} = propertySlice;
