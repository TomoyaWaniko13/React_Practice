import { createSlice } from '@reduxjs/toolkit';

import cartItems from '../../cartItems.ts';

const initialState = {
  cartItems: cartItems,
  // number of items added to cart
  numberOfItemsAddedToCart: 2,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

const cartReducer = cartSlice.reducer;
export default cartReducer;
