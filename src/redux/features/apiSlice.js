import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import environment from '../environment';
const baseQuery = fetchBaseQuery({ baseUrl: "/"});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});