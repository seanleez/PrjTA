import { createSlice } from "@reduxjs/toolkit";

type TState = {
  isLogin: boolean;
  accessToken: string | null;
};

const initialState: TState = {
  isLogin: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { accessToken } = action.payload;
      state.isLogin = true;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.isLogin = false;
      state.accessToken = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
