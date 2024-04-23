import { createStore, combineReducers } from 'redux';
import { reducer } from '../modules/counterReducer';

const reducers = combineReducers({
  counter: reducer,
});

export default createStore(reducers);
