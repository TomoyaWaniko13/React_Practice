import React, {createContext, useState} from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";

const Example = () => {
    const [state, setState] = useState(0);

    return (
        <MyContext.Provider value={[state, setState]}>
            <div style={{border: "10px solid blue", padding: 10}}>
                <h1>Example component.</h1>
                <Child/>
                <OtherChild/>
            </div>
        </MyContext.Provider>
    );
};

export const MyContext = createContext();

export default Example;
