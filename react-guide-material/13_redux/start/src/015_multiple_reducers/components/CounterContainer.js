import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const CounterContainer = () => {
    return (
        <>
            <CounterResult />
            <CounterButton payload={2} type="+"/>
            <CounterButton payload={2} type="-"/>
            <CounterButton payload={10} type="+"/>
            <CounterButton payload={10} type="-"/>
        </>
    )
}
export default CounterContainer;