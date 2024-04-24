import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { asyncCount } from '../../api/counter';

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: '',
  },
  reducers: {
    add(state, { payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncWithStatus.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
        state.status = 'data is obtained.';
        state.count = state.count + action.payload;
      })
      .addCase(addAsyncWithStatus.rejected, (state) => {
        state.statsu = 'Error';
      });
  },
});

const { add, minus } = counter.actions;

const addAsyncWithStatus = createAsyncThunk('counter/asyncCount', async (payload) => {
  const response = await asyncCount(payload);
  return response.data;
});

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

export { add, minus, addAsync, addAsyncWithStatus };
export default counter.reducer;
