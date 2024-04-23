import { useDispatch } from 'react-redux';
import { add, subtract } from '../store/modules/counterSlice';

const CounterButton = ({ type, payload }) => {
  const dispatch = useDispatch();

  console.log(add(payload)); // {type: 'counter/add', payload: 2}

  const clickHandler = () => {
    const action = type === '+' ? add(payload) : subtract(payload);
    console.log(action);
    dispatch(action);
  };

  return (
    <button onClick={clickHandler}>
      {type}
      {payload}
    </button>
  );
};
export default CounterButton;
