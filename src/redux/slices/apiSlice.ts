import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logIn, logOut } from "@redux/slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if ((result?.error as any)?.originalStatus === 403) {
    console.log("Sending refresh token");
    //  Send refresh token to get new access token
    const refreshResult = await baseQuery(
      "/auth/refresh-token",
      api,
      extraOptions,
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = (api.getState() as any).auth.user;
      // Store new token
      api.dispatch(logIn({ ...refreshResult.data, user }));
      // Retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
