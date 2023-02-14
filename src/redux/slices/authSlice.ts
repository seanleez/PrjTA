import { createSlice } from "@reduxjs/toolkit";

type TState = {
  userEmail: string | null;
  accessToken: string | null;
};

const initialState: TState = {
  userEmail: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userEmail, accessToken } = action.payload;
      state.userEmail = userEmail;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.userEmail = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUserEmail = (state: any) => state.auth.userEmail;
export const selectCurrentAccessToken = (state: any) => state.auth.accessToken;

const authReducer = authSlice.reducer;
export default authReducer;
