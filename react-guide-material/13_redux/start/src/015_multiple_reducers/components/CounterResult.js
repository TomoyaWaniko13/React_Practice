import {useSelector} from "react-redux"

const CounterResult = () => {
    // const state = useCounter();

    const state = useSelector(state => state);
    console.log(state);
    // const state = useSelector(state => state.counter);
    return (
        <>
            <h3>{state.counter}</h3>
            <h3>{state.counter2}</h3>
        </>
    );
};

export default CounterResult;