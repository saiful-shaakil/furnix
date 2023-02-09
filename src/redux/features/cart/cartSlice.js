import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalProduct: 0,
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
    addItemToCart: (state, action) => {
      // console.log(action.payload);
      const oldProduct = state.cartItems.filter(
        (item) => item.id === action.payload.id
      );
      // console.log(oldProduct);
      if (oldProduct.length === 0) {
        const product = { ...action.payload, amount: 1 };
        state.cartItems.push(product);
        state.totalProduct = state.totalProduct + 1;
      } else {
        const filteredCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        console.log(current(filteredCart));
        // const { amount } = oldProduct[0];
        // const newAmount = amount + 1;
        // const product = { ...action.payload, amount: newAmount };
        // const newCart = [...filteredCart, product];
        // state.cartItems = newCart;
        // state.totalProduct = state.totalProduct + 1;
      }
      console.log(current(state.cartItems));
    },
    removeItemFromCart: (state, action) => {},
    increaseItemInCart: (state, action) => {
      const clickedProduct = state.cartItems.filter(
        (product) => (product.id = action.payload)
      );
      clickedProduct.amount = clickedProduct.amount + 1;
    },
    decreaseItemInCart: (state, action) => {},
    calculateTotalInCart: (state) => {},
    showCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
});

export const {
  clearCart,
  addItemToCart,
  removeItemFromCart,
  calculateTotalInCart,
  increaseItemInCart,
  decreaseItemInCart,
  showCart,
} = cartSlice.actions;

export default cartSlice.reducer;
