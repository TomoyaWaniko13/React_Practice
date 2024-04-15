/**
 * CounterButton component
 *
 * This component is responsible for dispatching actions to update the counter state in the Redux store.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.calcType - The type of calculation to perform ('+' or '-').
 * @param {number} props.step - The amount to increment or decrement the counter by.
 */
import {useDispatch} from "react-redux";
import {add, subtract} from "../modules/counterReducer";

const CounterButton = ({calcType, step}) => {
    // useDispatch is a hook from react-redux that returns the dispatch function.
    // This function allows you to dispatch actions to the Redux store.
    const dispatch = useDispatch();

    /**
     * onClickHandler function
     *
     * This function is called when the button is clicked. It dispatches an action to the Redux store
     * to update the counter state. The type of action dispatched depends on the calcType prop.
     */
    const onClickHandler = () => {
        // Depending on the calcType prop, either the add or subtract action creator is called.
        // The result is an action that is then dispatched to the Redux store.
        const action = calcType === '+' ? add(step) : subtract(step);
        console.log(action);
        dispatch(action);
    };

    // The component renders a button. When this button is clicked, the onClickHandler function is called.
    // The text of the button is determined by the calcType prop.
    return (
        <>
            <button onClick={onClickHandler}>{calcType}</button>
        </>
    );
};

export default CounterButton;