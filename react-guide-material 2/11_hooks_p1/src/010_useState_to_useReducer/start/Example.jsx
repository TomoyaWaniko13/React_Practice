import { useReducer, useState } from 'react';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case '+':
      return state + payload;
    case '-':
      return state - payload;
    default:
      throw new Error('unknown action');
  }
};

const Example = () => {
  const [state, setState] = useState(0);

  const [rstate, dispatch] = useReducer(reducer, 0);

  const countUp = () => {
    setState((prevState) => ++prevState);
  };

  const rcountUp = () => {
    dispatch('+');
  };
  const rcountDown = () => {
    dispatch('-');
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
