import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice.ts';

// 'Slice' contains 'State', 'Reducer' and 'Action Creator'.
// 'Store' contains multiple 'slices'.

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
