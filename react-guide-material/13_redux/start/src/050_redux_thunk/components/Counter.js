// Importing add, minus, addAsync from counter module
import {add, minus, addAsync, minusAsync} from "../store/modules/counter"

// Importing CounterResult and CounterButton components
import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

/**
 * Counter is a component that displays the counter result and three buttons.
 * Each button performs a different action: increment, decrement, and asynchronous increment.
 *
 * @returns {JSX.Element} A fragment containing the CounterResult and three CounterButton components
 */
const Counter = () => {
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreator={add}/>
            <CounterButton step={2} calcType="-" actionCreator={minus}/>
            <CounterButton step={2} calcType="async(+)" actionCreator={addAsync}/>
            <CounterButton step={2} calcType="async(-)" actionCreator={minusAsync}/>
        </>
    )
}

// Exporting Counter as default export
export default Counter;