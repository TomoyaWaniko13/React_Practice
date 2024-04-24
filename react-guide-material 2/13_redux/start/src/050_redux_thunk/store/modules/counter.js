import { createSlice } from '@reduxjs/toolkit';
import asyncCount from '../../api/asyncCount.js';

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  },
});

const addAsync = (payload) => {
  return async (dispatch) => {
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

const minusAsync = (payload) => {
  return async (dispatch) => {
    const response = await asyncCount(payload);
    dispatch(minus(response.data));
  };
};

const { add, minus } = counter.actions;

export { add, minus, addAsync, minusAsync };
export default counter.reducer;
