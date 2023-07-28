import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bayutApi = createApi({
  reducerPath: "bayutApi",
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
    getPropertyDetails: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getAgencyList: builder.query({
      query: (phrase) => `/agencies/list?query=${phrase}`,
    }),
  }),
});

export const {
  useGetPropertyListMutation,
  useGetPropertyDetailsQuery,
  useGetAgencyListQuery,
} = bayutApi;
