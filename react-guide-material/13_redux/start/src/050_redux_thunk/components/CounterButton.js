// Importing useDispatch from react-redux
import { useDispatch } from "react-redux";

/**
 * CounterButton is a component that displays a button.
 * When the button is clicked, it dispatches an action to the Redux store.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.calcType - The type of calculation to be performed.
 * @param {number} props.step - The step size for the calculation.
 * @param {function} props.actionCreator - The action creator function to be dispatched.
 * @returns {JSX.Element} A button element.
 */
const CounterButton = ({calcType, step, actionCreator}) => {

    // useDispatch hook is used to dispatch actions to the Redux store
    const dispatch = useDispatch();


    const clickHandler = () => {
        dispatch(actionCreator(step));
    }

    // Return a button element that calls clickHandler when clicked
    return <button onClick={clickHandler}>{calcType}{step}</button>
}

// Exporting CounterButton as default export
export default CounterButton;