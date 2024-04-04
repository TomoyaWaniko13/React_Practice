import {useState} from "react";

const Example = () => {
    console.log(<Example/>);

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(10);
    const [countC, setCountC] = useState(20);
    const handleButtonA = () => {
        setCountA(countA + 1);
    }
    const handleButtonB = () => {
        setCountB(countB + 1);
    }
    const handleButtonC = () => {
        setCountC(countC + 1);
    }


    return (
        <>
            <p>Number of times button A is pressed: {countA} </p>
            <button onClick={handleButtonA}>
                Button A
            </button>

            <p>Number of times button B is pressed: {countB} </p>
            <button onClick={handleButtonB}>
                Button B
            </button>

            <p>Number of times button C is pressed: {countC} </p>
            <button onClick={handleButtonC}>
                Button C
            </button>
        </>
    );
};

export default Example;
