// Importing useSelector from react-redux
import { useSelector } from "react-redux"

/**
 * CounterResult is a component that displays the current state from the Redux store.
 *
 * @returns {JSX.Element} A fragment that displays the current state
 */
const CounterResult = () => {
    // useSelector hook is used to extract data from the Redux store state
    // Here it's used to get the current state
    const state = useSelector(state => state);

    console.log(state);

    // Return a fragment displaying the current state
    return (
        <>
            {state}
        </>
    );
};

// Exporting CounterResult as default export
export default CounterResult;