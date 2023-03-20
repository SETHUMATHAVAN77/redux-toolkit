import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const url = "https://course-api.com/react-useReducer-cart-project";

import items from "../../data";

// const getProducts = async()=>{};

// const getProducts = createAsyncThunk("cart/cartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });
// redux thunk

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  // isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const CartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      CartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const CartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      CartItem.quantity -= 1;

      state.cartItems = state.cartItems.filter((item) => item.quantity > 0);
    },
    calculateTotals: (state) => {
      let price = 0;
      let quantity = 0;

      state.cartItems.forEach((item) => {
        quantity += item.quantity;

        price += item.quantity * item.price;
      });
      state.totalPrice = price.toFixed(2);
      state.totalQuantity = quantity;
    },
  },

  // extraReducers: {
  //   // pending
  //   [getProducts.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   // fulfilled
  //   [getProducts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   // failed
  //   [getProducts.failed]: (state) => {
  //     state.isLoading = true;
  //   },
  // },
});

// console.log(cartSlice);
export default cartSlice.reducer;

export const { clearCart, remove, increase, decrease, calculateTotals } =
  cartSlice.actions;

// export { getProducts };
