
import { apiSlice } from '../features/apiSlice';
const Blog_URL = '/api/v1/blog';

export const blogApiSlice
 = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    blogList: builder.mutation({
      query: (data) => ({
        url: `${Blog_URL}/list`,
        method: 'POST',
        body: data,
      }),
    }),
    blogDetail: builder.mutation({
      query: (data) => ({
        url: `${Blog_URL}/details`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useBlogListMutation, useBlogDetailMutation } = blogApiSlice;
