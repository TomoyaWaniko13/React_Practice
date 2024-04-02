/* POINT 式と文
式(expression)：何らかの値を返すもの（変数に代入できるもの）
               like '3 + 4' or 'myFunction()'
               jsx内で使用できる。
文(statement)：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
               like 'let x = 3' or 'if (x > 3) {...}'
               jsx内で使用できない。
*/

import "./Child.css";

const Child = () => {

    const a = 1; // '1' is an expression.

    const fn = () => 'hello';
    const b = fn(); // the result of fn() is an expression

    const c = 1 === 1; // '1 === 1' is an expression.
    console.log(1 === 1);

    // const d = if(true) {'hello'}; This is an error.

    const e = true ? 'This is true.' : 'This is false';
    return (
        <div className="component">
            <h3>式と文</h3>
            {1}
            {fn()}
            {1 === 1}
            {true ? 'This is true.' : 'This is false'}
        </div>
    );
};

export default Child;
