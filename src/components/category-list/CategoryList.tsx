import { DirectoryItem } from "../directory-item/DirectoryItem";
import { DirectoryContainer } from "./category-list.styles.jsx";

export const CategoryList = ({ categories }: any) => {
  return (
    <DirectoryContainer>
      {categories.map((category: any) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
