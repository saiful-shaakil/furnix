"use client";
const { combineReducers, configureStore } = require("@reduxjs/toolkit");
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
