// Importing the necessary functions from Redux Toolkit
import {configureStore} from "@reduxjs/toolkit";

// Importing the reducer from the counterSlice module
import counterReducer from "./modules/counterSlice";

/**
 * This function configures and exports the Redux store.
 * The store is configured with a single reducer, 'counter', which is imported from the counterSlice module.
 * The 'counter' reducer manages a slice of the state in the Redux store.
 *
 * @returns {Store} The configured Redux store.
 */
const store = configureStore({
    reducer: {
        // The 'counter' key corresponds to a specific field in the Redux store's state.
        // The 'counterReducer' function will handle actions related to this slice of state.
        counter: counterReducer
    }
});

export default store;