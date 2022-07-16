import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "./CategoriesPreview";
import { Category } from "./Category";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
