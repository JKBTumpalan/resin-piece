import { DirectoryItem } from "../category-item/DirectoryItem";
import "./category-list.styles.scss";

export const CategoryList = ({ categories }: any) => {
  return (
    <div className="directory-container">
      {categories.map((category: any) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
