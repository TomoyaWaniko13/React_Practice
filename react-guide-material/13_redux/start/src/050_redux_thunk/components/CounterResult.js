// Importing useSelector from react-redux
import { useSelector } from "react-redux"

/**
 * CounterResult is a component that displays the current counter value from the Redux store.
 *
 * @returns {JSX.Element} A h3 element displaying the current counter value
 */
const CounterResult = () => {
  // useSelector hook is used to extract data from the Redux store state
  // Here it's used to get the current counter value
  const count = useSelector(state => state.counter.count);

  // Return a h3 element displaying the current counter value
  return <h3>{count}</h3>;
};

// Exporting CounterResult as default export
export default CounterResult;