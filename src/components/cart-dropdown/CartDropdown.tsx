import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { Button } from "../button/Button";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: any) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
