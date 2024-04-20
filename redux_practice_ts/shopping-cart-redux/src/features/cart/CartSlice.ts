import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems.ts';

// reset a shopping cart.
const initialState = {
  cartItems: cartItems,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  // state
  initialState,
  // reducers and action creators
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [], quantity: 0, total: 0 };
    },
    deleteItem: (state, action) => {
      // console.log(action);
      //   {
      //     "type": "cart/deleteItem",
      //     "payload": 4
      // }
      const deleteId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== deleteId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.quantity = cartItem.quantity + 1;
    },
  },
});

console.log(cartSlice);

export const { clearCart, deleteItem, increase } = cartSlice.actions;
export default cartSlice.reducer;
