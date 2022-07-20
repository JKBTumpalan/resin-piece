import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data";
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    getCategories();
    // addCollectionAndDocuments("collections", SHOP_DATA);
    // console.log("Added resin piece collections.");
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
