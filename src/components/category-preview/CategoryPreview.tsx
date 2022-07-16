import "./category-preview.styles.scss";
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";

export const CategoryPreview = ({ title, productsArray }: any) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link
          to={`/shop/${title.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          <span className="preview-title"> {title.toUpperCase()} </span>
        </Link>
      </h2>
      <div className="preview">
        {productsArray
          .filter((_: any, index: any) => {
            if (index < 4) return _;
          })
          .map((product: any) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};
