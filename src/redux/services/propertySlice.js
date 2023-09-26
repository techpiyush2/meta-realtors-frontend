import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import environment from "../environment";

export const propertySlice = createApi({
  reducerPath: "propertySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: environment.baseUrl+ 'api/v1',
  }),

  endpoints: (builder) => ({
    getPropertyList: builder.mutation({
      query: (data) => ({
        url: `property/list`,
        method: 'POST',
        body: data,
      }),
    }),
    createProperty: builder.mutation({
      query: (data) => ({
        url: `property/create`,
        method: 'POST',
        body: data,
      }),
    }),
    createUpload: builder.mutation({
      query: (data) => ({
        url: `property/uploadImage`,
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
  useCreatePropertyMutation,
  useCreateUploadMutation,
  useGetAgencyListQuery,
} = propertySlice;
