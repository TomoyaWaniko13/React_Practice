import { useDispatch, useSelector } from 'react-redux';

const CounterButton = ({ type, payload }) => {
  const dispatch = useDispatch();

  // const dispatch = useCounterDispatch();

  const clickHandler = () => {
    dispatch({ type: 'counter2/' + type, payload });
  };

  return (
    <div>
      <button onClick={clickHandler}>
        {type}
        {payload}
      </button>
    </div>
  );
};
export default CounterButton;
