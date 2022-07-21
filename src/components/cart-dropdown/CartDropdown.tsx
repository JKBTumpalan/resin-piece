import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  CartItemsDiv,
  CheckoutButton,
} from "./cart-dropdown.styles.jsx";
import { useSelector } from "react-redux";
import { getCartItems } from "../../store/cart/cart-selector";

const CartDropdown = () => {
  const cartItems = useSelector(getCartItems);
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
