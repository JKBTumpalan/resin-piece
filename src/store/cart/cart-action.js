//Find product in the existing cart, if found, add quantity. Else, add as new product.
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//Find product in existing cart items, if found, reduce quantity, else, filter items to remove product.
const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (CartItems, productToAdd) => {
  // Here
  const newCartItems = addCartItem(CartItems, productToAdd);
  return { type: "SET_CART_ITEMS", payload: newCartItems };
};

export const removeItemFromCart = (CartItems, productToRemove) => {
  const newCartItems = removeCartItem(CartItems, productToRemove);
  return {
    type: "SET_CART_ITEMS",
    payload: newCartItems,
  };
};

export const clearItemsFromCart = (CartItems, productToClear) => {
  const newCartItems = clearCartItem(CartItems, productToClear);
  return {
    type: "SET_CART_ITEMS",
    payload: newCartItems,
  };
};

export const setIsCartOpen = (boolean) => ({
  type: "SET_IS_CART_OPEN",
  payload: boolean,
});
