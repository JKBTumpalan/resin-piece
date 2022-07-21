import { createSelector } from "@reduxjs/toolkit";

//Check whole categories slice.
const selectCategories = (state) => state.categories;

//Check categoriesState
export const selectCategoriesState = createSelector(
  [selectCategories],
  (categoriesSlice) => categoriesSlice.categoriesState
);

//Run if categoriesState is ran
export const getCategories = createSelector(
  [selectCategoriesState],
  (categoriesState) =>
    categoriesState.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
