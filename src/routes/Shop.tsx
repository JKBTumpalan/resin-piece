import { useContext, Fragment } from "react";

import ProductCard from "../components/product-card/ProductCard";
import { CategoriesContext } from "../context/CategoriesContext";

import "./shop.styles.scss";

export const Shop = () => {
  const { categories }: any = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((title, index) => (
        <Fragment key={index}>
          <h2> {title} </h2>
          <div className="products-container">
            {categories[title].map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};
