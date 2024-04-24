import { add, minus, addAsync, addAsyncWithStatus } from '../store/modules/counter';

import CounterResult from './CounterResult';
import CounterButton from './CounterButton';
import { useSelector } from 'react-redux';

const Counter = () => {
  const status = useSelector((state) => state.counter.status);

  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType='+' actionCreator={add} />
      <CounterButton step={2} calcType='-' actionCreator={minus} />
      <CounterButton step={2} calcType='非同期(+)' actionCreator={addAsync} />
      <CounterButton step={2} calcType='async(+) with status' actionCreator={addAsyncWithStatus} />
      <h3>{status}</h3>
    </>
  );
};
export default Counter;
