import { CategoryContainer, Title } from "./category.styles.jsx";
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
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};
