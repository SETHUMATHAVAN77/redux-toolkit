import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { remove, increase, decrease } from "../Features/cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, price, title, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <article className="card-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div className="arrow">
        <button className="amount-btn" onClick={() => dispatch(increase)}>
          <FaArrowUp />
        </button>
        <p className="amount">{quantity}</p>
        <button className="amount-down" onClick={() => dispatch(decrease)}>
          <FaArrowDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
