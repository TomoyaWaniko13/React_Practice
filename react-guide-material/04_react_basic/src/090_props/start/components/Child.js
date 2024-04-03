/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// const Child = (props) => {
//     console.log(props);
//   return (
//     <div className={`component ${props.color}`}>
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

// const Child = (p) => { // variable name can be anything.
//     console.log(p);
//     return (
//         <div className={`component ${p.color}`}>
//             <h3>Hello component</h3>
//         </div>
//     );
// };

// const Child = ({color}) => { // Destructuring assignment.
//     console.log(color);
//
//     return (
//         <div className={`component ${color}`}>
//             <h3>Hello component from Child.js</h3>
//         </div>
//     );
// };

// const Child = ({color = 'green'}) => { // default value can be set.
//     console.log(color);
//
//     return (
//         <div className={`component ${color}`}>
//             <h3>Hello component from Child.js</h3>
//         </div>
//     );
// };

// const Child = ({color: c = 'green'}) => { // variable name can be changed.
//     console.log(c);
//
//     return (
//         <div className={`component ${c}`}>
//             <h3>Hello component from Child.js</h3>
//         </div>
//     );
// };

// const Child = ({color: c = 'green', num, fn}) => {
//     console.log(num);
//
//     return (
//         <div className={`component ${c}`}>
//             <h3>Hello Component from Child.js</h3>
//             <h3>{num}</h3>
//             <h3>{fn('props')}</h3>
//         </div>
//     );
// }


const Child = ({color: c = 'green', num = 222, fn, bool, obj1, obj2}) => {

    return (
        <div className={`component ${c}`}>
            <h3>This is from Child.js</h3>
            <h3>{num}</h3>
            {fn && <h3>{fn('!!!!')}</h3>}
            <h3>{bool ? 'true' : 'false'}</h3>
            {obj1 && <h3>{obj1.name}</h3>}
            {obj2 && <h3>{obj2.name}</h3>}
        </div>
    );
};

export default Child;
