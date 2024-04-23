import CounterContainer from './components/CounterContainer';
import { Provider } from 'react-redux';
import counterStore from './store/counterStore';

const Example = () => {
  return (
    <Provider store={counterStore}>
      <CounterContainer />
    </Provider>
  );
};

export default Example;
