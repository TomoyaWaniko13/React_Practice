// Importing createSlice from redux toolkit
import {createSlice} from "@reduxjs/toolkit";

/**
 * counterSlice is a slice of Redux store responsible for counter operations.
 * It has an initial state of 0 and two reducers - add and minus.
 *
 * @type {import('@reduxjs/toolkit').Slice}
 */
const counterSlice = createSlice({
    name: 'counter', // Name of the slice
    initialState: 0, // Initial state of the slice
    reducers: {
        /**
         * add is a reducer function to increment the state.
         * It logs the action type and payload, then returns the incremented state.
         *
         * @param {number} state - Current state
         * @param {object} action - Action dispatched
         * @param {string} action.type - Type of the action
         * @param {number} action.payload - Payload of the action
         * @returns {number} - New state
         */
        add(state, {type, payload}) {
            console.log(type, payload)
            return state + payload;
        },
        /**
         * minus is a reducer function to decrement the state.
         * It logs the action type and payload, then returns the decremented state.
         *
         * @param {number} state - Current state
         * @param {object} action - Action dispatched
         * @param {string} action.type - Type of the action
         * @param {number} action.payload - Payload of the action
         * @returns {number} - New state
         */
        minus(state, {type, payload}) {
            console.log(type, payload)
            return state - payload;
        },
    },
});


// Destructuring add and minus actions from counterSlice
const {add, minus} = counterSlice.actions;

// Exporting add and minus actions
export {add, minus}

// Exporting the reducer function of counterSlice as default export
export default counterSlice.reducer