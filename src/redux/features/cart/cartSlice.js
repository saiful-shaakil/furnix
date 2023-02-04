import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  amount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    addItem: (state, action) => {
      //   state.cartItems.push(action);
    },
    removeItem: (state, action) => {},
    increaseItem: (state, action) => {},
    decreaseItem: (state, action) => {},
    calculateTotal: (state) => {},
    displayCart: (state, action) => {
      state.showCart = action.status;
    },
  },
});

export const {
  clearCart,
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
  displayCart,
} = cartSlice.actions;

export default cartSlice.reducer;
