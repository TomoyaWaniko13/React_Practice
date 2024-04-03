import Child from "./components/Child";


// const Example = () => {
//
//     const hello = (arg) => `hello ${arg}`;
//
//     const o = {
//         color: 'red'
//     }
//
//     return (
//         <>
//             <Child
//                 {...o}
//                 num={123}
//                 fn={hello}
//                 bool
//                 obj={{name: 'Basic Neko san', age: 22}}
//             />
//             <Child fn={hello}/>
//             <Child color={'red'}/>
//         </>
//     );
// };

const Example = () => {
    const hello = (arg) => `hello ${arg}`;
    const nekoObj = {name: 'Basic Neko San', weight: 222}

    return (
        <>
            <Child color={'red'}
                   num={111}
                   fn={hello}
                   bool
                   obj1={nekoObj}
                   obj2={{name: 'Spectacular neko san', age: 22}}
            />
            {/*this is default*/}
            <Child/>
        </>
    )

}

export default Example;
