// Importing useDispatch from react-redux
import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step, actionCreator}) => {

    // useDispatch hook is used to dispatch actions to the Redux store
    const dispatch = useDispatch();


    const clickHandler = () => {
        dispatch(actionCreator(step));
    };

    // Return a button element that calls clickHandler when clicked
    return <button onClick={clickHandler}>{calcType}{step}</button>
}

// Exporting CounterButton as default export
export default CounterButton;