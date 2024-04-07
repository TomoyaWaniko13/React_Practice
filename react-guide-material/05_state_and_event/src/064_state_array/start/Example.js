import {useState} from "react";

const Example = () => {
    const initialNumberArray = [1, 2, 3, 4, 5];
    const [numberArray, setNumberArray] = useState(initialNumberArray);
    console.log(numberArray);

    const shuffleNumberArray = () => {
        const newNumberArray = [...numberArray];
        const value = newNumberArray.pop();
        newNumberArray.unshift(value);

        setNumberArray(newNumberArray);
    }

    return (
        <>
            <h1>{numberArray}</h1>
            <button onClick={shuffleNumberArray}>Shuffle!!!</button>
        </>
    );
};

export default Example;
