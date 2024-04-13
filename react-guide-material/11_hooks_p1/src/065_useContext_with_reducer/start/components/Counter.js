import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

// Counter() component is a container of CounterResult() and
// CounterButton components.import CounterResult from "./CounterResult";
const Counter = () => {
    return (
        <>
            <CounterResult/>
            <CounterButton calcType={'+'} changeAmount={10}/>
        </>
    );
};

export default Counter;