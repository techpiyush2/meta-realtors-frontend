
import { apiSlice } from '../features/apiSlice';
const USERS_URL = '/api/v1/property';

export const propertySlice
 = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    propertyList: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/list`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePropertyListMutation } = propertySlice;
