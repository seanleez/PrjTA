import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    getPost: builder.query({
      query: (postId) => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postAPI;
