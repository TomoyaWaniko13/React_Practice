import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/states.ts';
import { decrement, increment, login } from './actions';

export default function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const dispatch = useDispatch();

  // @ts-ignore
  return (
    <>
      <div className={'flex flex-col justify-center items-center  text-center p-10'}>
        <h3 className={'p-3'}>{isLogin ? 'you are logged in.' : 'you are logged out.'}</h3>
        <button onClick={() => dispatch(login())} className={'border-2 border-gray-900 p-3'}>
          {isLogin ? 'log out from here.' : 'log in from here.'}
        </button>
      </div>
      <div className={'flex justify-center p-2 h-full'}>
        <h3 className={'p-2'}>Count: {counter}</h3>
        <button onClick={() => dispatch(increment(1))} className={'border-2 border-gray-900 p-3'}>
          +1
        </button>
        <button onClick={() => dispatch(decrement(1))} className={'border-2 border-gray-900 p-3'}>
          -1
        </button>
        <button onClick={() => dispatch(increment(7))} className={'border-2 border-gray-900 p-3'}>
          +7
        </button>
        <button onClick={() => dispatch(decrement(7))} className={'border-2 border-gray-900 p-3'}>
          -7
        </button>
      </div>
    </>
  );
}

// <button onClick={() => dispatch(increment(1))} className={'border-2 border-gray-900 p-3'}>
//         +1
//       </button>
//       <button onClick={() => dispatch(decrement(1))} className={'border-2 border-gray-900 p-3'}>
//         -1
//       </button>
//       <button onClick={() => dispatch(increment(7))} className={'border-2 border-gray-900 p-3'}>
//         +7
//       </button>
//       <button onClick={() => dispatch(decrement(7))} className={'border-2 border-gray-900 p-3'}>
//         -7
//       </button>
