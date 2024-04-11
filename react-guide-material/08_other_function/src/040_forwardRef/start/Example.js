// import {useRef} from "react";
//
// const Input = ({customRef}) =>{
//     return <input type={'text'} ref={customRef}/>
// }
//
// const Example = () => {
//     /*
//         1. 再レンダリングされても情報が保存される.(通常の変数はレンダリングの時初期化される。)
//         2. refの値を変更しても再レンダリングされない。(下のupdateRef()では再レンダリングが発生しない。)
//         3. ref objectをJSXに渡すとそのDOMにアクセスできる。(common usage)
//     */
//
//     const ref = useRef();
//     return (
//         <>
//             <Input customRef={ref} />
//             <button onClick={() => ref.current.focus()}>
//                 focus on the input area.
//             </button>
//         </>
//     );
// };
//
// export default Example;
//


import {forwardRef, useRef} from "react";

const Input = forwardRef((props, ref) => {
    return <input type={'text'} ref={ref}/>
});

const Example = () => {
    const ref = useRef();
    return (
        <>
            <Input ref={ref} />
            <button onClick={() => ref.current.focus()}>
                focus on the input area.
            </button>
        </>
    );
};

export default Example;