import logger from "redux-logger";
import { compose, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  enhancers: [composedEnhancers],
});
