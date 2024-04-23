import { useSelector } from 'react-redux';

const CounterResult = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <h3>{state.counter.count}</h3>;
};

export default CounterResult;
