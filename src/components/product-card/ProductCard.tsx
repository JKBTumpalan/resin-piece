import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { Button } from "../button/Button";

import "./product-card.styles.scss";

const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart }: any = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;