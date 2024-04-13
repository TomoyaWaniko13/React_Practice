import {useReducer} from "react";

// This is a pure function.
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'increment':
            return ++prevState;
        case 'decrement':
            return --prevState;
        default:
            throw new Error('unknown action type.');
    }
};

const Example = () => {
    // const initialState = 0;
    // const [state, setState] = useState(initialState);
    //
    // This is not a pure function.
    // const incrementState = () => setState(prevState => prevState + 1);
    // const decrementState = () => setState(prevState => prevState - 1);

    const initialState = 0;


    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementState = () => dispatch({ type: 'increment' });
    const decrementState = () => dispatch({ type: 'decrement' });

    return (
        <>
            <h3>{state}</h3>
            <button onClick={incrementState}>increment</button>
            <button onClick={decrementState}>decrement</button>
        </>
    );
};

export default Example;
