import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type TState = {
  cartItems: TCartItem[];
};

const initialState: TState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state: TState, action: PayloadAction<number>) {
      console.log("🚀 ~ file: cartSlice.ts:28 ~ addItem ~ action", action);
      console.log("🚀 ~ file: cartSlice.ts:28 ~ addItem ~ state", state);
    },
    deleteItem(state: TState, action: PayloadAction<number>) {
      console.log(state, action);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
