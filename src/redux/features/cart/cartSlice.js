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
      const selectedProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (selectedProduct) {
        selectedProduct.amount = selectedProduct.amount + 1;
      } else {
        const product = { ...action.payload, amount: 1 };
        state.cartItems.push(product);
      }
      // console.log(current(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const newCart = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
      state.cartItems = [...newCart];
    },
    increaseItemInCart: (state, action) => {
      const clickedProduct = state.cartItems.find(
        (product) => product.id === action.payload
      );
      clickedProduct.amount = clickedProduct.amount + 1;
    },
    decreaseItemInCart: (state, action) => {
      const clickedProduct = state.cartItems.find(
        (product) => product.id === action.payload
      );
      if (clickedProduct.amount > 1) {
        clickedProduct.amount = clickedProduct.amount - 1;
      } else {
        const newCart = state.cartItems.filter(
          (product) => product.id !== action.payload
        );
        state.cartItems = [...newCart];
      }
    },
    calculateTotalInCart: (state) => {
      let totalProduct = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalPrice += item.amount * item.money;
        totalProduct += item.amount;
      });
      state.totalPrice = totalPrice;
      state.totalProduct = totalProduct;
    },
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
