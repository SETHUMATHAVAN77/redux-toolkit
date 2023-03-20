import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Features/cart/CartSlice";

import modalSlice from "./Features/modal/modalSlice";

// console.log(cartReducer);

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});

// consist of few libraries

// redux (core library, state management)

// immer(allows to mutate state)

// redux-thunk (handles async actions)

// reselect(simplifies reduce functions)
// extras

// react-dev tools

// react-redux- our application with redux
