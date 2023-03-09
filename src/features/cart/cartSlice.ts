import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state: any, action) => {
      state.push(action.payload);
    },
    removeProduct: (state: any, action) => {
      state.splice(action.payload, 1);
    },
    updateProduct: (state: any, action) => {
      state.forEach((product: any) => {
        if (product.name === action.payload.name) {
          product.quantity += action.payload.quantity;
        }
      });
    },
    increaseQuantity: (state: any, action) => {
      state[action.payload].quantity += 1;
    },
    decreaseQuantity: (state: any, action) => {
      if (state[action.payload].quantity === 1) {
        state[action.payload].quantity = 1;
      } else state[action.payload].quantity -= 1;
    },
  },
});

// this is for dispatch
export const {
  addProduct,
  removeProduct,
  updateProduct,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

// this is for configureStore
export default cartSlice.reducer;
