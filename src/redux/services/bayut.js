import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/property/list",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "bd9812d039mshaf648f73f6fe561p1d9206jsnc85ea1d15d4e"
        //Old key "b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProperyList: builder.query({
      query: () => ``,
    }),
    getProperyDetails: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getAgencyList: builder.query({
      query: (phrase) => `/agencies/list?query=${phrase}`,
    }),
  }),
});

export const {
  useGetProperyListQuery,
  useGetProperyDetailsQuery,
  useGetAgencyListQuery,
} = bayutApi;
