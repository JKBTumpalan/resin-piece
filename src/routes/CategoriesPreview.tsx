import { useContext } from "react";

import { CategoriesContext } from "../context/CategoriesContext";
import { CategoryPreview } from "../components/category-preview/CategoryPreview";

export const CategoriesPreview = () => {
  const { categories }: any = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];

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
