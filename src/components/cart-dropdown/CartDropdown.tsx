import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { Button, BUTTON_TYPE_CLASSES } from "../button/Button";
import "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  CartItemsDiv,
  CheckoutButton,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsDiv>
        {cartItems.map((item: any) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItemsDiv>
      <CheckoutButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
