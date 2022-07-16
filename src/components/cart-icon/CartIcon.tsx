import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/CartContext";
import {
  CartCountSpan,
  CartIconContainer,
  StyledShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount }: any = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <StyledShoppingIcon />
      <CartCountSpan>{cartCount}</CartCountSpan>
    </CartIconContainer>
  );
};

export default CartIcon;
