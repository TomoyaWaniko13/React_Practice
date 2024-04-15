import {Provider} from "react-redux";
import store from "./store/store";
import CounterContainer from "./components/CounterContainer";

const Example = () => {

    return (
        <Provider store={store}>
            <CounterContainer/>
        </Provider>
    );
};

export default Example;