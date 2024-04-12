import {useState} from "react";


// let value = 0;
const Example = () => {

    const [state, setState] = useState(0);
    const increment = () => {
        setState(state + 1);
    }

    // window.alert();

    return (
        <>
            <button onClick={increment}>+</button>
            <h3>{state}</h3>
        </>
    );
};

export default Example;
