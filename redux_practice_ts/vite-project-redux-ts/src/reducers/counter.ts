import { IncrementDecrementAction } from '../types/actions.ts';

const counterReducer = (state: number = 0, action: IncrementDecrementAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
