import {createContext, useContext, useReducer} from "react";

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const GlobalCounterProvider = ({children}) => {

    const initialState = 0;
    const reducer = ((prevState, {calcType, changeAmount}) => {
            switch (calcType) {
                case '+':
                    return prevState + changeAmount;
                case '-':
                    return prevState - changeAmount;
                default:
                    throw new Error('unknown action.');
            }
        }
    );
    const [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterStateContext.Provider value={counterState}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterStateContext.Provider>
    );
};

// This hook returns the current state of the counter from the CounterStateContext.
const useCounterState = () => {
    return useContext(CounterStateContext);
};

// This hook returns the dispatch function from the CounterDispatchContext.
const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
};

export {GlobalCounterProvider, useCounterState, useCounterDispatch};