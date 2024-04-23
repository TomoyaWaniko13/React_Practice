// Importing add, minus, addAsync from counter module
import { add, minus, addAsync, minusAsync } from '../store/modules/counter';

// Importing CounterResult and CounterButton components
import CounterResult from './CounterResult';
import CounterButton from './CounterButton';

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType='+' actionCreator={add} />
      <CounterButton step={2} calcType='-' actionCreator={minus} />
      <CounterButton step={2} calcType='async(+)' actionCreator={addAsync} />
      <CounterButton step={2} calcType='async(-)' actionCreator={minusAsync} />
    </>
  );
};

// Exporting AsyncCounter as default export
export default Counter;
