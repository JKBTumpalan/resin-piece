import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "./CategoriesPreview";
import { Category } from "./Category";
import { fetchCategoriesAsync } from "./../store/categories/categories-action";
import { useAppDispatch } from "../hooks";

export const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
