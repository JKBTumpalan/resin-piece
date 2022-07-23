import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => {
  return { type: "SET_CATEGORIES_START" };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: "SET_CATEGORIES_SUCCESS",
    payload: categories,
  };
};

export const fetchCategoriesFailed = (error) => {
  return { type: "SET_CATEGORIES_FAILED", payload: error };
};

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categoryMap));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
