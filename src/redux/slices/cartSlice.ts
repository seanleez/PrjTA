import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface IState {
  cartItems: ICartItem[];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state: IState, action: IAction) {
      console.log(state, action);
    },
    deleteItem(state: IState, action: IAction) {
      console.log(state, action);
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { addItem, deleteItem } = cartSlice.actions;
export default cartReducer;
