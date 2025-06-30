import { createSelector } from 'reselect';

const selectCartState = state => state.cart;

export const selectProducts = createSelector(
  [selectCartState],
  cart => cart.products
);

export const selectCartItems = createSelector(
  [selectCartState],
  cart => cart.cart
);

export const calculateTotalPrice = createSelector(
  [selectCartItems],
  items => items.reduce((total, item) => total + item.price, 0)
);
