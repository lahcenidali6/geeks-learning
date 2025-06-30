import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Banana', price: 2 },
    { id: 3, name: 'Cherry', price: 3 },
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) state.cart.push(product);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
