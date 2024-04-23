const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/+':
      return state + payload;
    case 'counter/-':
      return state - payload;
    default:
      return state;
  }
};

// the return value of an action creator is an object.
const add = (payload) => {
  return {
    type: 'counter/+',
    payload: payload,
  };
};

// the return value of an action creator is an object.
const subtract = (payload) => {
  return {
    type: 'counter/-',
    payload: payload,
  };
};

export { reducer, add, subtract };
