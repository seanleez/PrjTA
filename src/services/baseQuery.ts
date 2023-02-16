import { ACCESS_TOKEN_KEY } from "@constants/const";
import { logIn, logOut } from "@redux/slices/authSlice";
import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query";

export const baseAuthQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  cache: "no-cache",
});

export const baseQueryWithoutToken = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
});

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseAuthQuery(args, api, extraOptions);
  console.log(result);

  // expired access token
  if (result?.error?.status === 401) {
    console.log("Sending refresh token");
    //  Send refresh token to get new access token
    const refreshResult = await baseAuthQuery(
      "/auth/refresh-token",
      api,
      extraOptions,
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      // Store new token
      api.dispatch(logIn(refreshResult?.data));
      // Retry the original query with new access token
      result = await baseAuthQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};
