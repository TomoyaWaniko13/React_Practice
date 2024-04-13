import { useCounter } from "../context/GlobalCounter";

const CounterResult = () => {
  const state = useCounter();
  return <h3>{state}</h3>;
};

export default CounterResult;