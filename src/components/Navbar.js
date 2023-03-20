import { FaShoppingBag } from "react-icons/fa";

import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Cart</h3>
        <div className="nav-container">
          <FaShoppingBag />
          <div className="amount-container">
            <p className="total-amount">{totalQuantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
