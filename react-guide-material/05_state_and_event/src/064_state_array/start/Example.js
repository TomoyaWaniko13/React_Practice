import {useState} from "react";

const Example = () => {
    // This numArray is an initial state.
    const initialNumberArray = [1, 2, 3, 4, 5];
    // eslint-disable-next-line no-undef
    const [numberArray, setNumberArray] = useState(initialNumberArray);
    console.log(numberArray);

    const shuffle = () => {
        const newNumberArray = [...numberArray];
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
        // The pop() method of Array instances removes the last element from
        // an array and returns that element.
        const lastElement = newNumberArray.pop();
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
        // The unshift() method of Array instances adds the specified elements to
        // the beginning of an array and returns the new length of the array.
        newNumberArray.unshift(lastElement);
        console.log(newNumberArray);
        setNumberArray(newNumberArray);
    }

    return (
        <>
            <h1>{numberArray}</h1>
            <button onClick={shuffle}>Shuffle!</button>
        </>
    );
};

export default Example;
