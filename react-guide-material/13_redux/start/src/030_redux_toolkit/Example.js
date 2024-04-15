// Importing necessary modules and components
import CounterContainer from "./components/CounterContainer"; // Importing CounterContainer component
import { Provider } from "react-redux"; // Importing Provider from react-redux
import store from "./store/store" // Importing the redux store

/**
 * Example component
 * This component is a wrapper for the CounterContainer component.
 * It uses the Provider component from react-redux to provide the redux store to its children.
 *
 * @returns {JSX.Element} A Provider component wrapping the CounterContainer component
 */
const Example = () => {
    return (
        // Providing the redux store to the CounterContainer component
        <Provider store={store}>
            <CounterContainer />
        </Provider>
    );
};

export default Example; // Exporting the Example component