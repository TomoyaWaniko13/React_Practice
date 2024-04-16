import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {asyncCount} from "../../api/counter"

const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        status: ''
    },
    reducers: {
        add(state, {type, payload}) {
            state.count = state.count + payload;
            // const newState = { ...state };
            // newState.count = state.count + payload
            // return newState;
        },
        minus(state, {type, payload}) {
            state.count = state.count - payload;
            // const newState = { ...state };
            // newState.count = state.count - payload
            // return newState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addAsyncWithStatus.pending, (state) => {
                state.status = 'Loading...'
            })
            .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
                state.status = 'data obtained.'
                state.count = state.count + action.payload;
            })
            .addCase(addAsyncWithStatus.rejected, (state) => {
                state.status = 'Error.'
            });
    }
});

const {add, minus} = counter.actions;

const addAsyncWithStatus = createAsyncThunk(
    'counter/asyncCount',
    async (payload) => {
        const response = await asyncCount(payload);
        return response.data;
    }
)

const addAsync = (payload) => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state);
        const response = await asyncCount(payload);
        dispatch(add(response.data));
    };
};


export {add, minus, addAsync, addAsyncWithStatus}
export default counter.reducer

/*
* Absolutely, let's use an analogy involving a restaurant to help explain this
* Redux Toolkit code, focusing on how each part interacts within the context of managing
* the restaurant's orders.

### Restaurant Analogy Overview

Imagine a restaurant where the kitchen is the system that handles orders (state changes).
* The orders can be simple, like adding or removing items from an order, or complex,
* involving asynchronous communication with suppliers (external APIs) to see if certain
* ingredients are available before confirming a dish can be prepared.

### Parts of the Code

1. **`createSlice` and `initialState`:**
   - **Restaurant Kitchen**: This is the main area where orders are handled.
   * The initial state with `count` (number of dishes ordered) and `status`
   * (current state of the order, like waiting, confirmed, or error) represents
   * the kitchen's starting setup each day.

2. **`Reducers` (`add` and `minus`):**
   - **Direct Kitchen Actions**: When a waiter adds or removes dishes from an order,
   *  these actions directly change the number of dishes (`count`). This is akin to the
   * `add` and `minus` reducers adjusting the `count` directly in the state without
   * needing to check with suppliers.

3. **`extraReducers`:**
   - **Communicating with Suppliers**: Sometimes, the kitchen needs to communicate
   *  asynchronously with suppliers to confirm ingredient availability before finalizing
   * certain dishes. This is like using `extraReducers` to handle actions from
   * `createAsyncThunk`, where:
     - `pending`: The kitchen is waiting for confirmation from the supplier (`state.status = 'Loading...'`).
     - `fulfilled`: The supplier confirms the ingredients are available, and the dish can be added to the order (`state.count` is updated).
     - `rejected`: The supplier indicates a lack of ingredients, and the order can't be completed (`state.status = 'error'`).

4. **`createAsyncThunk` (`addAsyncWithStatus`):**
   - **Special Orders Check**: When special dishes are ordered, the kitchen must check
   * asynchronously with suppliers to confirm availability. This function manages that process,
   * handling the asynchronous logic and updating the order status based on the response.

5. **`addAsync` (Thunk Action):**
   - **Internal Kitchen Async Action**: This function represents an internal decision to
   * add a dish based on a quick check inside the restaurant (like checking the pantry).
   * It's an asynchronous action where the kitchen confirms internally (without supplier)
   *  that a dish can be added, then updates the order directly.

### Bringing It Together

- **Waiters (Actions)**: They take customer requests and communicate them to the kitchen.
* Some requests can be fulfilled immediately (adding/removing dishes), while others require
*  confirmation from outside suppliers (special orders).
- **Kitchen (Reducers and Thunks)**: The kitchen processes these requests either by directly
*  updating the order (simple requests) or by engaging in asynchronous communications (special orders)
*  to ensure they can fulfill the request before proceeding.

This code manages the complexity of a restaurant's operations where direct, simple updates
*  and asynchronous, dependent updates coexist, ensuring the customer's experience (state)
*  is accurately and efficiently managed.
*
* */