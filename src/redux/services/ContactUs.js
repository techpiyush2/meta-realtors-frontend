import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import environment from "../environment";

export const contactSlice = createApi({
  reducerPath: "contactSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: environment.baseUrl+ 'api/v1/contactus',
  }),

  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (data) => ({
        url: `/create`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useContactUsMutation
} = contactSlice;
