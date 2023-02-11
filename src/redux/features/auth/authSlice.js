import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  displayLoginPage: false,
  displayRegisterPage: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    displayLogin: (state, action) => {
      state.displayLoginPage = action.payload;
    },
    displayRegister: (state, action) => {
      state.displayRegisterPage = action.payload;
    },
  },
});

export const { displayLogin, displayRegister } = authSlice.actions;

export default authSlice.reducer;
