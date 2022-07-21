import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-action";
import { getCartItems } from "../../store/cart/cart-selector";

import { Button, BUTTON_TYPE_CLASSES } from "../button/Button";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={require(`./../../assets/${imageUrl}`)} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>₱{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
