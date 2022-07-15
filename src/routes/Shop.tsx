import { useContext } from "react";

import { CategoriesContext } from "../context/CategoriesContext";
import { CategoryPreview } from "../components/category-preview/CategoryPreview";
import "./shop.styles.scss";

export const Shop = () => {
  const { categories }: any = useContext(CategoriesContext);

  return (
    <div className="shop-container">
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
    </div>
  );
};
