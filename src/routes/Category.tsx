import { CategoryContainer, Title } from "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductCard from "../components/product-card/ProductCard";
import { useSelector } from "react-redux";
import {
  getCategories,
  getCategoriesLoadingState,
} from "../store/categories/categories-selector.js";
import Spinner from "../components/spinner/spinner";

export const Category = () => {
  const { category }: any = useParams();
  const categories = useSelector(getCategories);
  const [products, setProducts] = useState(categories[category]);
  const isLoading = useSelector(getCategoriesLoadingState);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};
