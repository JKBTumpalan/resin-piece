import { useSelector } from "react-redux";

import CheckoutItem from "../components/checkout-item/CheckoutItem";
import { getCartItems, getCartTotal } from "../store/cart/cart-selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ₱{cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
