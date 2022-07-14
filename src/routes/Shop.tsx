import { useContext } from "react";

import ProductCard from "../components/product-card/ProductCard";
import { ProductsContext } from "../context/ProductsContext";

import "./shop.styles.scss";

export const Shop = () => {
  const { products }: any = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
