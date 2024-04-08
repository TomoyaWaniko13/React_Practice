
import { useState } from "react";

const Example = () => {

    // inputFact is a function that generates an object each time it's called.
    // The object contains a unique key (a random number between 0 and 999) and
    // a value which is a JSX element (<input />).
    const createInputObject = () => ({
        key: Math.floor(Math.random() * 1e3),
        value: <input />,
    });

    // Here, the useState hook is used to initialize the inputs state variable with
    // an array of three objects created by calling inputFact() three times.
    // setInputs is the function provided by useState to update the inputs state.
    const [inputObjects, setInputObjects] =
        useState([createInputObject(), createInputObject(), createInputObject()]);


    // This function adds a new input object to the beginning of the inputs array.
    // It does this by calling setInputs with a new array that consists of a new input
    // object (from inputFact()) followed by the previous state (...prev).
    const unshiftInputObject = () => {
        setInputObjects((prev) => [createInputObject(), ...prev]);
    };

    // The return statement uses JSX to render the UI:
    return (
        <>
            <button onClick={unshiftInputObject}>先頭に追加</button>
            <div className="flex">
                <div>
                    <strong>{`key={uniqueKey}`}</strong>
                    <ul>
                        {inputObjects.map((inputObject) => (
                            <li key={inputObject.key}>
                                {inputObject.key}: {inputObject.value}
                            </li>
                        ))}
                    </ul>

                </div>
                <div>
                    <strong>{`key={index}`}</strong>
                    <ul>
                        {inputObjects.map((inputObject, index) => (
                            <li key={index}>
                                {inputObject.key}: {inputObject.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Example;
