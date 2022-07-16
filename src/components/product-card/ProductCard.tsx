import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { Button, BUTTON_TYPE_CLASSES } from "../button/Button";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart }: any = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
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
