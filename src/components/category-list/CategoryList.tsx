import { CategoryItem } from "../category-item/CategoryItem";
import "./category-list.styles.scss";

export const CategoryList = ({ categories }: any) => {
  return (
    <div className="directory-container">
      {categories.map((category: any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
