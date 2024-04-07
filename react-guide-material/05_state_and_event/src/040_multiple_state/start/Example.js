import {useState} from "react";

const Example = () => {
    console.log(<Example/>); // check '_owner' -> 'memoizedState' -> 'next'
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(10);
    const [countC, setCountC] = useState(100);

    const incrementCountA = () =>{
        setCountA(countA + 1);
    }
    const incrementCountB = () =>{
        setCountB(countB + 1);
    }
    const incrementCountC = () =>{
        setCountC(countC + 1);
    }

    return (
        <>
            <p>number of times the Button A pressed: {countA}</p>
            <button onClick={incrementCountA}>Button A</button>

            <p>number of times the Button B pressed: {countB}</p>
            <button onClick={incrementCountB}>Button B</button>

            <p>number of times the Button C pressed: {countC}</p>
            <button onClick={incrementCountC}>Button C</button>
        </>
    );
};

export default Example;