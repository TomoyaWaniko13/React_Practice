import { createSlice } from '@reduxjs/toolkit';

// slice consists of state, reducer, and action creator.
const counterSlice = createSlice({
  name: 'counter',
  // state
  initialState: { count: 0 },
  // reducer and action creator
  reducers: {
    add(state, { type, payload }) {
      if (isNaN(payload)) {
        console.error('Payload must be a number');
        return state;
      }

      const newState = { ...state };
      newState.count = state.count + payload;
      return newState;
    },
    subtract(state, { type, payload }) {
      if (isNaN(payload)) {
        console.error('Payload must be a number');
        return state;
      }

      const newState = { ...state };
      newState.count = state.count - 1;
      return newState;
    },
  },
});

export const { add, subtract } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
