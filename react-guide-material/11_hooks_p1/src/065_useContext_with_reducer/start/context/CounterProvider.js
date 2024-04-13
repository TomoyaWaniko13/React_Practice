import {createContext, useContext, useReducer} from "react";

// CounterContext is being created to hold the current state of a counter
const CounterContext = createContext();
// CounterDispatchContext is created to hold the dispatch function.
// In the context of React's useReducer hook, the dispatch function
// is used to update the state based on the actions sent to it.
const CounterDispatchContext = createContext();

// CounterProvider() is a component that encapsulates state logic and makes
// the counter state('state' variable) and its updater function('dispatch()' function)
// accessible to any component.
export const CounterProvider = ({children}) => {

    const [state, dispatch] = useReducer((prev, {type, changeAmount}) => {
        switch (type) {
            case "+":
                return prev + changeAmount;
            case "-":
                return prev - changeAmount;
            default:
                throw new Error('unknown action.')
        }
    }, 0);

    return (
        <CounterContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    );
};

// This function returns the state variable from CounterProvider.js
const useCounter = () => {
    return useContext(CounterContext);
}

// This function returns the dispatch function from CounterProvider.js
const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
};

export {useCounter, useCounterDispatch};