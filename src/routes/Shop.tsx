import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "./CategoriesPreview";
import { Category } from "./Category";
import "./shop.styles.scss";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
