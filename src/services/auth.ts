import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "users/me",
    }),
    refreshToken: builder.query({
      query: () => "auth/refresh-token",
    }),
  }),
});

export const { useGetCurrentUserQuery, useRefreshTokenQuery } = authApi;
