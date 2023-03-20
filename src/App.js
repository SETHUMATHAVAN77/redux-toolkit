import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CartContainer from "./components/CartContainer";

import { useDispatch, useSelector } from "react-redux";

import { calculateTotals, getProducts } from "./Features/cart/CartSlice";
// import Loading from "./components/Loading";

const App = () => {
  const { cartItems, isLoading } = useSelector((state) => state.cart);

  const { isModalOpen } = useSelector((state) => state.Modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <>
      {isModalOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </>
  );
};

export default App;
