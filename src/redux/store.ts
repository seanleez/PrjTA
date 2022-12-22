import { configureStore } from "@reduxjs/toolkit";
import { postAPI } from "@services/postServices";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    carts: cartReducer,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export default store;
