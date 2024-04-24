import CounterResult from './CounterResult';
import CounterButton from './CounterButton';
import { add, addAsync, minus, minusAsync } from '../store/modules/counter';

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType='+' actionCreator={add} />
      <CounterButton step={2} calcType='-' actionCreator={minus} />
      <CounterButton step={10} calcType='async +' actionCreator={addAsync} />
      <CounterButton step={10} calcType='async -' actionCreator={minusAsync} />
    </>
  );
};
export default Counter;
