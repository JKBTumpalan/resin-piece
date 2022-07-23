import { CategoryPreview } from "../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import {
  getCategories,
  getCategoriesLoadingState,
} from "../store/categories/categories-selector";
import Spinner from "../components/spinner/spinner";
export const CategoriesPreview = () => {
  const categoriesState = useSelector(getCategories);
  const isLoading = useSelector(getCategoriesLoadingState);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesState).map((title) => {
          const products = categoriesState[title];

          return (
            <CategoryPreview
              key={title}
              title={title}
              productsArray={products}
            ></CategoryPreview>
          );
        })
      )}
    </>
  );
};
