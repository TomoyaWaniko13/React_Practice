// actions.ts
import { Action } from 'redux';

export interface IncrementDecrementAction extends Action {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
}

export interface LoginAction extends Action {
  type: 'LOGIN';
}
