import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../context/CategoriesContext";
import ProductCard from "../components/product-card/ProductCard";

export const Category = () => {
  const { category }: any = useParams();
  const { categories }: any = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
