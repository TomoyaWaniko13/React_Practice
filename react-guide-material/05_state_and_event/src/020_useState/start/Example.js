// const Example = () => {
//     let displayValue = 'default value';
//
//     return (
//         <>
//             <input
//                 type={'text'}
//                 onChange={(e) => {
//                     displayValue = e.target.value;
//                     console.log(displayValue);
//                 }}
//             /> = {displayValue}
//         </>
//     );
// };
// export default Example;

// 1. necessary to have React re-render a Component to make a new React element so that
// the value of displayValue variable is updated...
// 2. necessary to store the value of displayValue variable somewhere...

//  useState() function allows us to achieve these two goals!

import {useState} from "react";

const Example = () => {
    let displayValue;
    let [val, setVal] = useState();
    console.log('re-rendered...');

    return (
        <>
            <input type="text"
                   onChange={(e) => {
                       console.log(e.target.value);
                       setVal(e.target.value);
                   }}
            /> = {val}
        </>
    );
};

export default Example;

// import {useState} from "react";
//
// const Example = () => {
//     // https://react.dev/reference/react/useState
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//
//     let [value, setValueFn] = useState('initial state');
//     return (
//         <>
//             <input
//                 type="text"
//                 onChange={(e) => {
//                     setValueFn(e.target.value);
//                 }}
//             /> = {value}
//         </>
//     )
// }
//

// export default Example;
