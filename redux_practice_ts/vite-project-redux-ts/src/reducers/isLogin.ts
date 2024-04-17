import { LoginAction } from '../types/actions.ts';

const isLoginReducer = (state: boolean = false, action: LoginAction) => {
  switch (action.type) {
    case 'LOGIN':
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
