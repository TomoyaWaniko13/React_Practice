// Importing add, minus, addAsync from counter module
import { add, minus, addAsync } from "../store/modules/counter"

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
            {/* CounterResult component displays the current counter value */}
            <CounterResult />
            {/* CounterButton component increments the counter value by 2 */}
            <CounterButton step={2} calcType="+" actionCreator={add}/>
            {/* CounterButton component decrements the counter value by 2 */}
            <CounterButton step={2} calcType="-" actionCreator={minus}/>
            {/* CounterButton component asynchronously increments the counter value by 2 */}
            <CounterButton step={2} calcType="async(+)" actionCreator={addAsync}/>
        </>
    )
}

// Exporting Counter as default export
export default Counter;