import { createContext, useContext, useReducer } from "react";

const GlobalCounter = createContext();
const CounterDispatchContext = createContext();

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer((prev, { type, step }) => {
        switch (type) {
          case "+":
            return prev + step;
          case "-":
            return prev - step;
          default:
            throw new Error('不明なactionです。')
        }
      }, 0);
    return (
        <GlobalCounter.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </GlobalCounter.Provider>
    )
}

const useCounter = () => {
    return useContext(GlobalCounter);
}

const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch }