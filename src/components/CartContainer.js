import React from "react";

import CartItem from "./CartItem";

import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../Features/cart/CartSlice";
import { openModal } from "../Features/modal/modalSlice";

const CartContainer = () => {
  const { CartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const disPatch = useDispatch();
  if (totalQuantity < 1) {
    return (
      <section className="card">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-card">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="card">
      <header>
        <h2>Your Cart</h2>
      </header>

      <div>
        {CartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="card-total">
          <h4>
            total <span>${totalPrice}.00</span>
          </h4>
        </div>
        <button
          type="button"
          className="clear-btn"
          onClick={() => disPatch(openModal())}
        >
          ClearCart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
