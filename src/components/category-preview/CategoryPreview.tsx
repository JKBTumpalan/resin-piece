import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";

export const CategoryPreview = ({ title, productsArray }: any) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title
          to={`/shop/${title.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {productsArray
          .filter((_: any, index: any) => {
            if (index < 4) return _;
          })
          .map((product: any) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
