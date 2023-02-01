import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@services/auth";
import { postAPI } from "@services/posts";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
