import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/CartSlice.ts';

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
