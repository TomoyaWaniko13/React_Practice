import { createStore } from 'redux';

const initialState = 0;
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '+':
      return state + payload;
    case '-':
      return state - payload;
    default:
      return state;
  }
};

const counterStore = createStore(reducerwindow.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default counterStore;
