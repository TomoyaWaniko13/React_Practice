// 'Slice' contains 'State', 'Reducer' and 'Action Creator'.
// 'Store' contains multiple 'slices'.

// import { createSlice } from '@reduxjs/toolkit';
//
// const initialState = {
//   cartItems: [],
//   quantity: 0,
//   total: 0,
// };
//
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {},
// });
//
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
});

export default cartSlice.reducer;
