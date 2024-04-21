import { createSlice } from '@reduxjs/toolkit';

import cartItems from '../../cartItems.ts';

const initialState = {
  cartItems: cartItems,
  numberOfAllItemsInCart: 1,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeAllItems: () => {
      return { cartItems: [], numberOfAllItemsInCart: 0, totalCost: 0 };
    },
    removeOneItem: (state, action) => {
      const passedItemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== passedItemId);
    },
    addOneItem: (state, action) => {
      const passedItemId = action.payload;
      const foundCartItem = state.cartItems.find((item) => item.id === passedItemId);
      if (foundCartItem) {
        foundCartItem.numberOfEachItemInCart = foundCartItem.numberOfEachItemInCart + 1;
      }
      state.numberOfAllItemsInCart = state.numberOfAllItemsInCart + 1;
    },
    deleteOneItem: (state, action) => {
      const passedItemId = action.payload;
      const foundCartItem = state.cartItems.find((item) => item.id === passedItemId);
      if (foundCartItem) {
        foundCartItem.numberOfEachItemInCart = foundCartItem.numberOfEachItemInCart - 1;
      }
      state.numberOfAllItemsInCart = state.numberOfAllItemsInCart - 1;
    },
    calculateTotalCost: (state) => {
      let numberOfAllItemsInCart: number = 0;
      let totalCost: number = 0;
      state.cartItems.forEach((item) => {
        numberOfAllItemsInCart += item.numberOfEachItemInCart;
        totalCost += Number(item.price) * item.numberOfEachItemInCart;
      });
      state.numberOfAllItemsInCart = numberOfAllItemsInCart;
      state.totalCost = totalCost;
    },
  },
});

export const { removeAllItems, removeOneItem, deleteOneItem, addOneItem, calculateTotalCost } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
