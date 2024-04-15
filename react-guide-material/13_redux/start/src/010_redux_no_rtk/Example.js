import CounterContainer from "./components/CounterContainer";
import { Provider } from "react-redux";
import store from "./store/counterStore"

const Example = () => {
    return (
        <Provider store={store}>
            <CounterContainer />
        </Provider>
    );
};

export default Example;
