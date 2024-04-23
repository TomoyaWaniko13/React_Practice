import { useDispatch } from 'react-redux';

const CounterButton = ({ type, payload }) => {
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch({ type, payload });

  return (
    <>
      <button onClick={onClickHandler}>
        {type}
        {payload}
      </button>
    </>
  );
};

export default CounterButton;
