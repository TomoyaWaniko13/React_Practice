import Counter from "./components/Counter";
import {GlobalCounterProvider} from "./context/GlobalCounterProvider";

// POINT useContext x useReducer

const Example = () => {
    return (
        <>
            <GlobalCounterProvider>
                <Counter/>
            </GlobalCounterProvider>
        </>
    );
};

export default Example;