// Importing createSlice from @reduxjs/toolkit
import {createSlice} from "@reduxjs/toolkit";

// Importing asyncCount from "../../api/counter"
import {asyncCount} from "../../api/counter";

/**
 * counter is a slice of the Redux store state.
 * It includes the initial state, reducers and actions for the counter feature.
 */
const counter = createSlice({
    // The name of the slice
    name: 'counter',

    // The initial state of the slice
    initialState: {
        count: 0
    },

    // The reducers for the slice
    reducers: {
        /**
         * add is a reducer that increments the count state.
         *
         * @param {object} state - The current state.
         * @param {object} action - The dispatched action.
         */
        add(state, {type, payload}) {
            state.count = state.count + payload;
        },

        /**
         * minus is a reducer that decrements the count state.
         *
         * @param {object} state - The current state.
         * @param {object} action - The dispatched action.
         */
        minus(state, {type, payload}) {
            state.count = state.count - payload;
        }
    }
})

// Destructuring the actions from the counter slice
const {add, minus} = counter.actions;


/*
* const addAsync = (payload) => {
    return async (dispatch, getState) => {
        ...
    }
}
* addAsync is a function that takes a single argument, payload.
* It returns another function, which is the actual thunk.
* This returned function is asynchronous and it takes two arguments,
* dispatch and getState, which are provided by Redux Thunk middleware.
*
* Thunks allow you to perform asynchronous operations within your
* action creators.
* */
const addAsync = (payload) => {
    return async (dispatch, getState) => {
        const state = getState();

        // Here, the thunk performs an asynchronous operation by
        // calling asyncCount(payload). This function is assumed to
        // be an API call or some asynchronous function that takes
        // payload as an argument and returns a promise. The await
        // keyword is used to wait for the promise to resolve, and
        // the resolved value is stored in response.
        const response = await asyncCount(payload);

        // Once the asynchronous operation completes, dispatch is
        // called with the result. add(response.data) creates an
        // action with the type and payload needed to update the
        // Redux state. In this case, it dispatches the add action,
        // using response.data as the payload, which is expected to
        // be the value by which the counter should be incremented.
        dispatch(add(response.data));
    }
}

// Exporting the actions and the reducer
export {add, minus, addAsync}
export default counter.reducer