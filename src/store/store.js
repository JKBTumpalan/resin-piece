import logger from "redux-logger";
import {
  compose,
  configureStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));
const persistConfig = {
  key: "primary",
  storage: storage,
  whitelist: ["cart", "categories"],
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  enhancers: [composedEnhancers],
});

export const persistor = persistStore(store);
