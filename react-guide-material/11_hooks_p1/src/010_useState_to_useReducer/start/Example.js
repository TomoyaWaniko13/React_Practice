import {useReducer} from "react";

const Example = () => {
    // const [state, setState] = useState(0);
    // const increment = () => setState(prevState => ++prevState);

    // const initialState = 0;

    // const reducer = () => prevState => ++prevState;

    // const reducer = () => (prevState, action) => {
    //     switch (action.type) {
    //         case 'increment':
    //             return ++prevState;
    //         case 'decrement':
    //             return --prevState;
    //         default:
    //             throw new Error('unknown action');
    //     }
    // };

    // const [state, dispatch] = useReducer(reducer(), initialState);
    //
    // const increment = () => {
    //     dispatch({type:'increment'});
    // }
    // const decrement = () => {
    //     dispatch({type:'decrement'});
    // }

    const initialState = 0;

    const reducer = (prevState, action) => {
        switch (action.type) {
            case 'increment':
                return ++prevState;
            case 'decrement':
                return --prevState;
            default:
                throw new Error('unknown action type');
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () =>{
        dispatch({type: 'increment'});
    }

    const decrement = () =>{
        dispatch({type: 'decrement'});
    }

    return (
        <>
            <div>
                {/*<h3>the value of the 'state' variable: {state}</h3>*/}
                {/*<button onClick={increment}>increment</button>*/}
                {/*<button>increment</button>*/}
            </div>
            <div>
                <h3>the value of the 'state' variable: {state}</h3>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        </>
    );
};

export default Example;
