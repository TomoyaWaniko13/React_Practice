import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store';

// redux-thunkの定義

// thunkを使用すると、アクションの代わりに関数をディスパッチすることができ
// 、この関数内で非同期処理を行い、その結果に基づいてさらにアクションをdispatchすることができます。

// payloadは、アクションに対して必要な任意のデータを運ぶために使用されます。
// この引数を通して、外部からデータを受け取り、thunk内で非同期操作や副作用の処理に
// 使用することができます。例えば、ユーザーIDや検索クエリなど、API呼び出しに必要な情報を
// payloadとして渡すことが一般的です。

// 外部関数は、通常、アクションクリエーターとして機能します。これは、アクションを生成する関数で、
// 必要なデータ（payloadなど）を引数として受け取ります。この関数の主な役割は、アクションに必要なデータを組み立て、
// それを内部関数に渡すことです。
// 内部関数は、実際に副作用（API呼び出し、非同期処理など）を扱います。この関数は
// dispatchとgetStateの両方を引数として受け取り、これによりReduxのストアにアクセスし、
// 必要に応じてアクションをディスパッチする能力があります。

// 非同期処理を行う際にgetStateを必ず使う必要はありません。getStateは状態を参照する必要がある
// 特定のシナリオで使用されるもので、すべての非同期処理が状態参照を必要とするわけではありません。

// const thunkFunction = (payload) => {
//   return (dispatch, getState) => {
//     副作用処理(非同期など)
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
