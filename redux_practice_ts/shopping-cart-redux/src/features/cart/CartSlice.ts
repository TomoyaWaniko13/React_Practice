import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems.ts';
// reset a shopping cart.
const initialState = {
  cartItems: cartItems,
  quantity: cartItems.length,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, // state
  reducers: {}, // reducers and action creators
});

export default cartSlice.reducer;
