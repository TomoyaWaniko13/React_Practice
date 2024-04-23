import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import asyncCount from '../../api/asyncCount';

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
    },
  },
});

const { add, minus } = counter.actions;

const addAsync = (payload) => {
  return async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

const minusAsync = (payload) => {
  return async (dispatch) => {
    // const state = getState();
    // console.log(state);
    const response = await asyncCount(payload);
    dispatch(minus(response.data));
  };
};

export { add, minus, addAsync, minusAsync };
export default counter.reducer;
