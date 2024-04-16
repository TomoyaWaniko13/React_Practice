// Importing configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing reducer from "./modules/counter"
import reducer from "./modules/counter";

/**
 * configureStore is a function from @reduxjs/toolkit that creates a Redux store.
 * It takes an object as an argument, which should include a `reducer` property.
 * The `reducer` property should be an object that maps the names of different slices of the state to their respective reducers.
 * In this case, the `counter` slice of the state is mapped to the `reducer` imported from "./modules/counter".
 *
 * @returns {Store} A Redux store.
 */
export default configureStore({
  reducer: {
    counter: reducer
  }
});