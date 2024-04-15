// Importing useDispatch from react-redux
import { useDispatch } from "react-redux";
// Importing add and minus actions from counterSlice
import { add, minus } from "../store/modules/counterSlice"

/**
 * CounterButton is a component that dispatches actions to increment or decrement the counter.
 *
 * @param {object} props - The props object
 * @param {string} props.calcType - The type of calculation ('+' for increment, '-' for decrement)
 * @param {number} props.step - The amount to increment or decrement by
 * @returns {JSX.Element} A button element that dispatches an action on click
 */
const CounterButton = ({calcType, step}) => {

    // useDispatch hook returns a reference to the dispatch function from the Redux store
    const dispatch = useDispatch();

    // Handler function for button click
    const clickHandler = () => {
        // Depending on calcType, create an action to increment or decrement
        const action = calcType === '+' ? add(step) : minus(step);
        // Dispatch the action to the Redux store
        dispatch(action);
    }

    // Return a button that dispatches the action on click
    return <button onClick={clickHandler}>{calcType}{step}</button>
}

// Exporting CounterButton as default export
export default CounterButton;