// const Example = () => {
//     let displayVal;
//     console.log('re-rendered.');
//     return (
//         <>
//             <input
//                 type={'text'}
//                 onChange={(e) => {
//                     console.log(e.target.value);
//                     displayVal = e.target.value;
//                 }}
//             />={displayVal}
//         </>
//     );
// };
//
// export default Example;


import {useState} from "react";

const Example = () => {
    let [val, setVal] = useState();
    console.log('re-rendered.')
    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    console.log(e.target.value);
                    setVal(e.target.value);
                }}
            /> = {val}
        </>
    );
};

export default Example;
