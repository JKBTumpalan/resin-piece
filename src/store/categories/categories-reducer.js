const INITIAL_STATE = {
  categoriesState: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categoriesState: payload,
      };
    default:
      return state;
  }
};
