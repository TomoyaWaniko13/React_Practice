import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
        name: 'counter',
        initialState: 0,
        reducers: {
            addCounterAction(state, {type, payload}) {
                return state + payload;
            },
            subtractCounterAction(state, {type, payload}) {
                return state - payload;
            }
        },
    }
);

export const {addCounterAction, subtractCounterAction} = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;

