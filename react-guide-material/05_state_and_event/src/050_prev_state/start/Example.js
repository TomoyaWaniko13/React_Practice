import {useState} from "react";

const Example = () => {
    console.log('re-rendered.');
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        console.log(count);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }

    return (
        <>
            <p>number of times the Button A pressed: {count}</p>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    );
};

export default Example;