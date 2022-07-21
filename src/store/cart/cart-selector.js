import { createSelector } from "@reduxjs/toolkit";

const selectCartReducer = (state) => state.cart;

export const getIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const getCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const getCartTotal = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

export const getCartCount = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
