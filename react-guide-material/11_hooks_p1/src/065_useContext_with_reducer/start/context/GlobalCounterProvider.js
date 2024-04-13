import {createContext, useContext, useReducer} from "react";

// CounterContext is being created to hold the current state of a counter.
const CounterStateContext = createContext();
// // CounterDispatchContext is created to hold the dispatch function 'dispatch()'.
const CounterDispatchContext = createContext();

// CounterContextProvider() component encapsulates state logic and
// make a 'counterState' variable and its updater function 'dispatch()'
// accessible to any component.
const GlobalCounterProvider = ({children}) => {

    const initialState = 0;
    const reducer = ((prevState, {type, changeAmount}) => {
            switch (type) {
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

    return(
        <CounterStateContext.Provider value={counterState}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterStateContext.Provider>
    )
}


// useCounterState() function returns a 'counterState' variable a GlobalCounterProvider.js
const useCounterState = () => useContext(CounterStateContext);
// useCounterDispatch() function returns a 'dispatch()' function from a GlobalCountertProvider.js
const useDispatch= () => useContext(CounterDispatchContext);

export { GlobalCounterProvider,useCounterState,useDispatch };