// const Example = () => {
//     let displayValue = 'default value';
//     return (
//         <>
//             <input
//                 type={'text'}
//                 onChange={(e) => {
//                     displayValue = e.target.value;
//                 }}
//             /> = {displayValue}
//         </>
//     );
// };


import {useState} from "react";

// const Example = () => {
//     let displayValueArray = useState('hello');
//     console.log(displayValueArray);
//     return (
//         <>
//             <input
//                 type={'text'}
//                 onChange={(e) => {
//                     const setFn = displayValueArray[1];
//                     setFn(e.target.value);
//                 }}
//             /> = {displayValueArray[0]}
//         </>
//     );
// };


const Example = () => {
    // https://react.dev/reference/react/useState
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    let [value, setValueFn] = useState('initial state');
    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setValueFn(e.target.value);
                }}
            /> = {value}
        </>
    )
}

export default Example;
