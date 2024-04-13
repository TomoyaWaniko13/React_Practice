import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

// Counter() is a container of CounterResult() and CounterButton components.
const Counter = () => {
    return (
        <>
            <CounterResult/>
            <CounterButton changeAmount={2} calcType="+"/>
            <CounterButton changeAmount={2} calcType="-"/>
        </>
    )
}
export default Counter;