import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "./CategoriesPreview";
import { Category } from "./Category";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "./../store/categories/categories-action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
