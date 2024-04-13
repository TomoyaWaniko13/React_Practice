// import {useCounter} from "../context/CounterProvider";
//
// // CounterResult() displays the value of the state variable.
// const CounterResult = () => {
//     // useCounter() returns the state variable from CounterProvider. js
//     const state = useCounter();
//     return <h3>{state}</h3>;
// };
//
// export default CounterResult;

import {useCounterState} from "../context/GlobalCounterProvider";

const CounterResult = () => {
    const counterState = useCounterState();
    return (
        <h3>
            {counterState}
        </h3>
    );
};

export default CounterResult;