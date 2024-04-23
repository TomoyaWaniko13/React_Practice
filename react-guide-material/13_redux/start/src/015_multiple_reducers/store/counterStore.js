import { combineReducers, createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case 'counter/+':
      return state + payload;
    case 'counter/-':
      return state - payload;
    default:
      return state;
  }
};

const reducer2 = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case 'counter2/+':
      return state + payload;
    case 'counter2/-':
      return state - payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: reducer,
  counter2: reducer2,
});

const counterStore = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default counterStore;
