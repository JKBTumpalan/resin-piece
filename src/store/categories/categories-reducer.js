const INITIAL_STATE = {
  categoriesState: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORIES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categoriesState: payload,
        isLoading: false,
      };
    case "SET_CATEGORIES_FAILED":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
