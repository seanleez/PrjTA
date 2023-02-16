import { ACCESS_TOKEN_KEY } from "@constants/const";
import { createSlice } from "@reduxjs/toolkit";

type TState = {
  isLogin: boolean;
};

const initialState: TState = {
  isLogin: !!localStorage.getItem(ACCESS_TOKEN_KEY),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      state.isLogin = true;
    },
    logOut: (state) => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      state.isLogin = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
