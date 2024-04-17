import { IncrementDecrementAction, LoginAction } from '../types/actions.ts';

export const increment = (payload: number): IncrementDecrementAction => {
  return {
    type: 'INCREMENT',
    payload,
  };
};

export const decrement = (payload: number): IncrementDecrementAction => {
  return {
    type: 'DECREMENT',
    payload,
  };
};

export const login = (): LoginAction => {
  return {
    type: 'LOGIN',
  };
};
