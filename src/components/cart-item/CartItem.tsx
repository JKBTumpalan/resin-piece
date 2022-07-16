import "./cart-item.styles.jsx";
import { CartItemContainer, ItemDetailsDiv } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }: any) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} style={{ width: "30%" }} />
      <ItemDetailsDiv className="item-details">
        <span style={{ fontSize: "16px" }}>{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsDiv>
    </CartItemContainer>
  );
};

export default CartItem;
