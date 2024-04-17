import { combineReducers } from 'redux';
import counterReducer from './counter.ts';
import isLoginReducer from './isLogin.ts';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
