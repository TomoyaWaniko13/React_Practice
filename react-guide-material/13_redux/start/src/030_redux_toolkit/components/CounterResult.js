import {useSelector} from "react-redux";

const CounterResult = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useSelector(state => state);
    return (
        <h3>{state.counter}</h3>
    );
};

export default CounterResult;