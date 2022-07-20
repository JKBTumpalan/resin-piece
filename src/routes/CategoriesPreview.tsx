import { useContext } from "react";

import { CategoryPreview } from "../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { getCategories } from "../store/categories/categories-selector";

export const CategoriesPreview = () => {
  const categoriesState = useSelector(getCategories);

  return (
    <>
      {Object.keys(categoriesState).map((title) => {
        const products = categoriesState[title];

        return (
          <CategoryPreview
            key={title}
            title={title}
            productsArray={products}
          ></CategoryPreview>
        );
      })}
    </>
  );
};
