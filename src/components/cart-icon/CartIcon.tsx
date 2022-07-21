import { useDispatch, useSelector } from "react-redux";

import { getCartCount, getIsCartOpen } from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-action";

import {
  CartCountSpan,
  CartIconContainer,
  StyledShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const isCartOpen = useSelector(getIsCartOpen);
  const cartCount = useSelector(getCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <StyledShoppingIcon />
      <CartCountSpan>{cartCount}</CartCountSpan>
    </CartIconContainer>
  );
};

export default CartIcon;
