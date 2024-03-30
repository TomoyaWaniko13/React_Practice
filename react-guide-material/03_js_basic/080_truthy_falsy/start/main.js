// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
console.log(result); // -10


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
let falseObject1 = Boolean(false); // without a new keyword
console.log(falseObject1); // false
console.log(Boolean(falseObject1)); // false


let falseObject2 = new Boolean(false);  // with a new keyword (it should not be used.)
console.log(falseObject2); // [Boolean: false]
console.log(Boolean(falseObject2)); // true
console.log();

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log();

// Logical AND (&&) the operator returns the value of the first falsy
const resultA = '' && 'foo'; //
console.log(resultA);
const resultB = 2 && 0; // 0
console.log(resultB);
const resultC = 'foo' && 4; // 4
console.log(resultC);
console.log();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
//
const resultD = '' || 'foo'; // foo
console.log(resultD);
const resultE = 2 || 0; // 2
console.log(resultE);
const resultF = 'foo' || 4; // foo
console.log(resultF);
