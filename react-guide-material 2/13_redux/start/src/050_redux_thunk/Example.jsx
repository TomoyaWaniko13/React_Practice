import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store';

// redux-thunkの定義
// const thunkFunction = (payload) => {
//   return (dispatch, getState) => {
//     副作用処理(console.log(),DOM manipulation,
//     talk with a server, timer, generation of a rando number);
//   }
// }
const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
