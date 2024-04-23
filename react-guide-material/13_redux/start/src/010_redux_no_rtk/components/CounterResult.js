import { useSelector } from 'react-redux';

const CounterResult = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <>{state}</>;
};

export default CounterResult;
