import { createStore, combineReducers } from "redux";
import {reducer} from "../modules/counterReducer";

/**
 * Combines all the reducers into a single reducing function with each key corresponding
 * to the slice of the state managed by the respective reducer.
 * @type {Function}
 */
const reducers = combineReducers({
  counter: reducer
});

/**
 * Creates a Redux store that holds the complete state tree of your app.
 * @returns {Store} A Redux store that lets you read the state, dispatch actions and subscribe to changes.
 */
export default createStore(reducers);