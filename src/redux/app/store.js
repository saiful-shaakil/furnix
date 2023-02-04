import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore);
